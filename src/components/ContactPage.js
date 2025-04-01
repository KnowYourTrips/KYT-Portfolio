import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Styles/ContactPage.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qkk9atj", // Replace with your EmailJS service ID
        "template_elexwwo", // Replace with your EmailJS template ID
        form.current,
        "2y_Tr9dmq4j8c-dyf" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="contact-page-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="title" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="content" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;