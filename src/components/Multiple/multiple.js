import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [selectionOption, setSelectionOption] = useState("grapefruit");


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}, Selection: ${selectionOption}`
    );
  };

  const handleDropdownChange = (event) => {
    setSelectionOption(event.target.value);
  };

  return (
    <div className="multiple">
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoFocus required minLength={4}
        placeholder="Enter your name"
      />

      <label className="multiple__text" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="multiple__input"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <label className="multiple__text" htmlFor="message">
        Message:
      </label>
      <textarea
        id="message"
        className="multiple__textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message"
      />

      <form>
        <label >
          Select your favorite flavor:
          <select value={selectionOption} onChange={handleDropdownChange}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
      </form>

      <button className="multiple__button" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
}
