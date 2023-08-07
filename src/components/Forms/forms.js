import React, { useState } from "react";

const MyForm = () => {
  // Form object state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    isSubscribed: false,
    // Additional form fields can be added here
  });

  // Handler for input field changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle different input field types (text, checkbox, number, etc.)
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    alert(
      `Name: ${formData.firstName + ' ' + formData.lastName},  Email: ${formData.email}, Age: ${formData.age}, Subscribe: ${formData.isSubscribed}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Subscribe:
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
