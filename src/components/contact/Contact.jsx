import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm(
      "service_rnph6jk",
      "template_gwsg6es",
      formRef.current,
      "SkgNSyCfQc7K7aCff"
    )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS! Email sent. Response: " + result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("FAILED... Error: " + error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch (DEBUG MODE)</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sowmiyasuresh71@gmail.com</h5>
            <a href="mailto:sowmiyasuresh71@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            color="black"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            color="black"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            color="black"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
