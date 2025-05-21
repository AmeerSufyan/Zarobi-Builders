import React, { useState } from 'react';
import video from './contactvideo.mp4';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/contact_view/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok');
      })
      .then((data) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setStatus('Error sending message. Please try again.');
      });
  };
  return (
    <>
      <div className='w-full h-96 md:h-[80vh] relative'>
        <video src={video} autoPlay muted loop className='w-full h-full object-cover'></video>
        <div className='absolute inset-0 bg-black/40'>
          <h1 className='font-header text-[32px] md:text-[60px] absolute flex inset-0 items-center justify-center text-white font-semibold md:font-bold'>Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row md:gap-20 px-4  md:px-10 lg:px-20 mt-16 font-sans">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[24px] font-bold font-header mb-6">Reach Us At</h2>
          <div className="space-y-4 text-[16px]">
            <div className="flex gap-4">
              <FaPhoneAlt className="text-black" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex gap-4">
              <FaEnvelope className="text-black" />
              <span>support@freshcart.pk</span>
            </div>
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-black" />
              <span>123 Market Road, Bahria Town, Islamabad</span>
            </div>
          </div>

          <div className="mt-4 py-4 text-[16px]">
            <h3 className="py-4 text-[24px] font-bold">Operating Hours</h3>
            <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-black p-8 rounded-lg shadow-md font-sans text-[16px] w-full mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <h2 className='text-white text-[24px] font-header mb-5 font-bold text-center'>Contact Form</h2>

          {['Name', 'Email', 'Phone', 'Message'].map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block font-medium mb-1 text-white">{field}</label>
              {field !== 'Message' ? (
                <input
                  type={field === 'Email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              ) : (
                <textarea
                  rows="4"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              )}
            </div>
          ))}

          {status && <p className="text-white text-sm mb-4">{status}</p>}

          <button
            type="submit"
            className="w-full bg-blue-400 text-white hover:bg-blue-500 hover:text-white font-semibold py-2 rounded transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Google Map */}
      <div className="my-16 px-4  md:px-10 lg:px-20">
        <h3 className="text-[24px] font-bold font-header text-black mt-10">Find Us</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10848789.08746946!2d60.86643691182095!3d30.33084005430598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d76376b07d%3A0x5b30f4f9c34b2c47!2sPakistan!5e0!3m2!1sen!2s!4v1715771111111"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded shadow text-xl mt-10"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
