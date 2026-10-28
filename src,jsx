
import React, { useState } from "react";

export default function Src() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("5");
  const [category, setCategory] = useState("General");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitted(true);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setRating("5");
    setCategory("General");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <div className="container">
      <h1>Feedback Management System</h1>
      <p>We value your feedback. Please share your experience.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <label>Feedback Category</label>
          <select
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            <option value="General">General</option>
            <option value="Website">Website</option>
            <option value="Service">Service</option>
            <option value="Support">Customer Support</option>
            <option value="Suggestion">Suggestion</option>
          </select>

          <label>Rate Your Experience</label>
          <select
            value={rating}
            onChange={event => setRating(event.target.value)}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>

          <label>Your Feedback</label>
          <textarea
            placeholder="Write your feedback here..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            rows="5"
            required
          />

          <button type="submit">Submit Feedback</button>
          <button type="button" onClick={resetForm}>
            Clear Form
          </button>
        </form>
      ) : (
        <div className="success-card">
          <h2>Thank You, {name}!</h2>
          <p>Your feedback has been submitted successfully.</p>

          <h3>Feedback Summary</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Rating:</strong> {rating} / 5</p>
          <p><strong>Message:</strong> {message}</p>

          <button onClick={resetForm}>
            Submit Another Feedback
          </button>
        </div>
      )}

      <footer>
        <p>Feedback Management System | FSWD Project</p>
      </footer>
    </div>
  );
}
