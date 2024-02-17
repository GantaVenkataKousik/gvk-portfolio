import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const toastSuccess = () => {
    toast.success('Thank you for your FeedBack!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const toastError = () => {
    toast.error('Unknown Network Error', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
};

const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
};

const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://gvk-portfolio-api1.onrender.com/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toastSuccess();
      }
      else {
        toastError();
      }
    } catch (error) {

      toastError();
    }
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title" style={{ color: '#5779e0' }}>
        Contact Me
      </h2>
      <span className="section__subtitle">Get in touch</span>

      <div data-aos="fade-in" className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">venkatakousikcse01@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-github-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Github</h3>
              <span className="contact__subtitle">https://github.com/GantaVenkataKousik </span>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/3291f4338dc27f344cdc564a1df42f85"
          method="POST"
          onSubmit={handleSubmit}
          className="contact__form grid"
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input name="name" onChange={handleNameChange} id="name" type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input name="email" onChange={handleEmailChange} id="email" type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label" >
              Message
            </label>
            <textarea
              onChange={handleMessageChange}
              name="message"
              id="message"
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
