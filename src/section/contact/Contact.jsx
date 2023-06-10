import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5rwshh3",
        "template_2ztkw6r",
        refForm.current,
        "-RdXst9KNRRWWkx7m"
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
        },
        (error) => {
          alert("Message not successfully, please try again later!");
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <form onSubmit={sendEmail} className="form" netlify>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <br></br>
        <label>Email</label>
        <input type="email" name="user_email" required />
        <br></br>
        <label>Message</label>
        <textarea name="message" className="message" required />
        <br></br>
        <input type="submit" value="Send" className="btn primary" />
      </form>
    </section>
  );
}

export default Contact;
