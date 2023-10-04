import React, { useState } from 'react';
import './App.css';
import EmailSubmit from './components/EmailSubmit/EmailSubmit.js';
import Notification from './components/Notification/notification.js';


function App() {
  const [submitted, setSubmitted] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSubmit = (formData) => {
    // You can send the form data to a server here (e.g., via API).
    // For this example, we'll simulate a submission and show a notification.
    setSubmitted(true);
    setNotificationMessage('Form submitted successfully!');
  };

  return (
    <div className="App">
      {submitted ? (
        <Notification message={notificationMessage} />
      ) : (
        <EmailSubmit onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
