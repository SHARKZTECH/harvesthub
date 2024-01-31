import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Dropdown, Modal } from 'react-bootstrap';

// ProduceModal component for user input
const ProduceModal = () => {
const [show, setShowModal] = useState(false);
const [produceName, setProduceName] = useState('');
const [location, setLocation] = useState('');
const [quantity, setQuantity] = useState('');
const [price, setPrice] = useState('');

const handleClose = () => setShowModal(false);
const handleModalShow = () => setShowModal(true);
  const handleSave = () => {
    // Handle saving produce data here (you can add your logic)
    // For demonstration, you can simply log the data
    console.log({ produceName, location, quantity, price });

    // Reset form fields
    setProduceName('');
    setLocation('');
    setQuantity('');
    setPrice('');

    // Close modal
    handleClose();
  };

  return (
    <>
      <Button className="mb-3" variant="primary" onClick={handleModalShow}>
          Add Produce
        </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Produce</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="produceName">
            <Form.Label>Produce Name</Form.Label>
            <Form.Control type="text" value={produceName} onChange={(e) => setProduceName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};


export default ProduceModal;