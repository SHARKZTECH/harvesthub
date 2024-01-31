import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Dropdown } from 'react-bootstrap';

const Market = () => {
  const [filter, setFilter] = useState('demand'); // Filter state for demand/supply
  const [produceFilter, setProduceFilter] = useState(''); // Filter state for produce type
  const [locationFilter, setLocationFilter] = useState(''); // Filter state for location

  // Sample data for demonstration
  const produceData = [
    { id: 1, name: 'Maize', location: 'Nairobi', quantity: 100, price: 50, type: 'demand' },
    { id: 2, name: 'Tomatoes', location: 'Mombasa', quantity: 200, price: 80, type: 'supply' },
    { id: 3, name: 'Potatoes', location: 'Kisumu', quantity: 150, price: 60, type: 'demand' },
    // Add more produce data as needed
  ];

  // Filtered produce data based on selected filters
  const filteredProduce = produceData.filter(item => {
    if (filter === 'demand' && item.type === 'demand' || filter === 'supply' && item.type === 'supply') {
      return true;
    }
    if (produceFilter && item.name !== produceFilter) {
      return false;
    }
    if (locationFilter && item.location !== locationFilter) {
      return false;
    }
    return true;
  });

  // Handler for filtering by produce type
  const handleProduceFilter = (produce) => {
    setProduceFilter(produce);
  };

  // Handler for filtering by location
  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  return (
    <div>
      <div className='mx-4 mt-4'>
        <Form className="mb-3">
          <Row className="align-items-center">
            <Col xs={12} sm={6} md={4}>
              <Dropdown className="mb-2">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {filter === 'demand' ? 'Demands' : 'Supplies'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFilter('demand')}>Demands</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFilter('supply')}>Supplies</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Select className="mb-2" onChange={(e) => handleProduceFilter(e.target.value)}>
                <option value="">Filter by Produce</option>
                {produceData.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </Form.Select>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Select className="mb-2" onChange={(e) => handleLocationFilter(e.target.value)}>
                <option value="">Filter by Location</option>
                {produceData.map(item => (
                  <option key={item.id} value={item.location}>{item.location}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Form>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredProduce.map(item => (
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={`https://via.placeholder.com/600?text=${item.name}`} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {item.location}<br />
                    <strong>Quantity:</strong> {item.quantity}<br />
                    <strong>Price:</strong> Ksh {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Market;
