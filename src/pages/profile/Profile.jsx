import React, { useState } from 'react';

const FarmerProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null); // State to manage profile picture
  const [farmerName, setFarmerName] = useState("mark Otto");
  const [farmerLocation, setFarmerLocation] = useState("Kangaru, Embu");
  const [farmerBio, setFarmerBio] = useState("I have been farming for over 10 years and specialize in organic vegetable farming.");
  const [contactInfo, setContactInfo] = useState({
    email: "markOtto.doe@example.com",
    phone: "123-456-7890"
  });

  // Function to handle profile picture update
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="farmer-profile">
      {profilePicture && (
        <img src={profilePicture} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      )}
      <input type="file" accept="image/*" onChange={handlePictureChange} />
      <h2>{farmerName}</h2>
      <p><strong>Location:</strong> {farmerLocation}</p>
      <p><strong>Bio:</strong> {farmerBio}</p>
      <p><strong>Email:</strong> {contactInfo.email}</p>
      <p><strong>Phone:</strong> {contactInfo.phone}</p>
    </div>
  );
};

export default FarmerProfile;
