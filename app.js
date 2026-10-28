import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      alert("Cannot connect to server");
    }
  }

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={submit}>
        <input placeholder="Name" required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})} />

        <input type="email" placeholder="Email" required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})} />

        <textarea placeholder="Your Feedback" required
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})} />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
