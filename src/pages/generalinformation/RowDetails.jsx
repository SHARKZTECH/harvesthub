import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RowDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  // Simulate fetching data from backend using the id from params
  useEffect(() => {
    // Example fetch function, replace with your actual fetch logic
    const fetchProductDetails = async () => {
      try {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
          // Example data, replace with actual fetched data
          const data = {
            productName: 'Sample Product',
            farmInputs: 'Sample Farm Inputs',
            timePeriod: 'Sample Time Period',
            estimatedCost: 'Sample Estimated Cost'
          };
          setProductDetails(data);
        }, 1000); // Simulated delay of 1 second
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Product Name:</strong> {productDetails.productName}</p>
      <p><strong>Farm Inputs:</strong> {productDetails.farmInputs}</p>
      <p><strong>Time Period:</strong> {productDetails.timePeriod}</p>
      <p><strong>Estimated Cost:</strong> {productDetails.estimatedCost}</p>
    </div>
  );
};

export default RowDetails;
