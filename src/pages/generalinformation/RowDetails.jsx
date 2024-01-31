import React from 'react';
import { useParams } from 'react-router-dom';

const RowDetails = ({ rows }) => {
  const { id } = useParams();
  const row = rows.find(row => row.id === parseInt(id));

  if (!row) return <div>No details found</div>;

  return (
    <div>
      <h2>Row Details</h2>
      <p><strong>Product Name:</strong> {row.productName}</p>
      <p><strong>Farm Inputs:</strong> {row.farmInputs}</p>
      <p><strong>Time Period:</strong> {row.timePeriod}</p>
      <p><strong>Estimated Cost:</strong> {row.estimatedCost}</p>
    </div>
  );
};

export default RowDetails;