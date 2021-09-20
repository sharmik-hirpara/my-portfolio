import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ReCAPTCHA from 'react-google-recaptcha';
const creds = require('../config.js');


export default function Contact() {

  const recaptchaKey = '6LfFGnwcAAAAACi8FPnV-VMw3KSK4jCBa1Xr2nIF';
  const recaptchaRef = useRef();
  const SERVICE_ID = creds.SERVICE_ID;
  const TEMPLATE_ID = creds.TEMPLATE_ID;
  const USER_ID = creds.USER_ID;
  
  const [recaptchaToken, setReCaptchaToken] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        NotificationManager.success('', 'Message sent');
      }, (error) => {
        NotificationManager.error('Click here!', 'Something went wrong!', 5000, () => {
          alert('callback');
          window.location = "mailto:sharmik.hirpara@gmail.com";
        });
      });
    e.target.reset();
    recaptchaRef.current.reset();
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center">       
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-2/4 flex flex-col md:auto w-full">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-center">
            I am more than happy to get my hands dirty on a complex tasks, so hit me up with your message if you want to discuss further and I will get back to you as soon as possible.
          </p>
          <div className="relative mb-4">
            <label htmlFor="from_name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="from_email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <ReCAPTCHA
            className="flex justify-center mb-4"
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex-inline text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg display: inline-block">
              Send
            </button>
            <NotificationContainer/>
          </div>
        </form>
      </div>
    </section>
  ); 
}