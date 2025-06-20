import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honey: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Valid email required";
    if (!formData.message.trim()) errs.message = "Message is required";
    if (formData.honey) errs.honey = "Spam detected"; // Honeypot field
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/mrbkaedp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("There was an error sending your message.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error sending your message.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  if (submitted)
    return <p className="text-green-600">Thanks for your message! I'll get back to you soon.</p>;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows={4}
      />
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honey"
        value={formData.honey}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;