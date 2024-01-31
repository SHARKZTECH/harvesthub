import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { FaTrash, FaSave } from 'react-icons/fa';
import { FcViewDetails } from "react-icons/fc";

const Generalinformation = () => {
  const [rows, setRows] = useState([
    { id: 1, productName: 'Maize', farmInputs: 'Seeds, Fertilizer, Pesticides', timePeriod: '4-6', estimatedCost: '5000' },
    { id: 2, productName: 'Tomatoes', farmInputs: 'Seeds, Fertilizer, Mulch', timePeriod: '2-3', estimatedCost: '3000' },
    { id: 3, productName: 'Beans', farmInputs: 'Seeds, Fertilizer', timePeriod: '3-4', estimatedCost: '4000' },
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      productName: '',
      farmInputs: '',
      timePeriod: '',
      estimatedCost: ''
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  };

  const handleSaveChanges = () => {
    // You can implement save changes functionality here
    console.log('Changes saved:', rows);
  };

  const handleDetails = (row) => {
    setSelectedRow(row);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const handleChange = (e, id, field) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: e.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Farm Inputs</th>
            <th>Time Period (Months)</th>
            <th>Estimated Cost (Ksh)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><input type="text" value={row.productName} onChange={(e) => handleChange(e, row.id, 'productName')} /></td>
              <td><input type="text" value={row.farmInputs} onChange={(e) => handleChange(e, row.id, 'farmInputs')} /></td>
              <td><input type="text" value={row.timePeriod} onChange={(e) => handleChange(e, row.id, 'timePeriod')} /></td>
              <td><input type="text" value={row.estimatedCost} onChange={(e) => handleChange(e, row.id, 'estimatedCost')} /></td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteRow(row.id)}><FaTrash /></Button>
                <Button variant="success" onClick={handleSaveChanges}><FaSave /></Button>
                <Button variant="success" onClick={() => handleDetails(row)}><FcViewDetails /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleAddRow}>+</Button>

      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRow && (
            <div>
              <p><strong>Product Name:</strong> {selectedRow.productName}</p>
              <p><strong>Farm Inputs:</strong> {selectedRow.farmInputs}</p>
              <p><strong>Time Period:</strong> {selectedRow.timePeriod}</p>
              <p><strong>Estimated Cost:</strong> {selectedRow.estimatedCost}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailsModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Generalinformation;
