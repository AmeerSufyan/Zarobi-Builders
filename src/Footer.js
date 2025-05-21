import React from 'react';
import {Link} from 'react-router-dom';
import Footerlogo from './realstatelogo.jpeg';
import {
  FaFacebook, FaInstagram, FaTwitter, FaTiktok,
  FaPhone, FaMapMarkerAlt, FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
          {/* Logo & About */}
          <div className="space-y-6">
            <img src={Footerlogo} alt="NoImage" className="rounded-full w-32 h-32" />
            <p>
              Zarobi Builders is a dynamic real estate company specializing in the buying, selling,
              and renting of residential, commercial, and industrial properties. We offer tailored
              solutions for individuals, families, and businesses looking to invest in land, purchase
              a new home, lease commercial space, or sell property at competitive market rates.
            </p>
            <div className="flex gap-6 text-xl">
              <FaFacebook /><FaInstagram /><FaTwitter /><FaTiktok />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 mt-3 md:mt-36 lg:mt-36 lg:ml-8">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/residential">Residential Services</Link></p>
            <p><Link to="/commercial">Commercial Services</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/aboutus">About Us</Link></p>
            <p>Blog</p>
            <p><Link to="/contactus">Contact Us</Link></p>
          </div>

          {/* Services */}
          <div className="space-y-3 mt-3 lg:mt-36 lg:ml-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <p>Home Renovations</p>
            <p>Building Restoration</p>
            <p>Custom Builds</p>
            <p>Commercial Building</p>
            <p>Extensions</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mt-2 lg:mt-36 w-full ">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="flex items-center gap-2"><FaPhone />+92 4734632783</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt />Street 123 phase 7, Bahria Town, Rawalpindi</p>
            <p className="flex items-center gap-2"><FaEnvelope />abczarobibuilder@gmail.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-8 border-gray-600" />
        <div className="space-y-4 text-center">
          <p>Zarobi Builders Limited. All Rights Reserved</p>
          <p>Real Estate & Property Developers</p>
          <p>
            Zarobi Builders is a dynamic real estate company specializing in the buying,
            selling, and renting of residential, commercial, and industrial properties. We offer tailored solutions for
            individuals, families, and businesses looking to invest in land, purchase a new home, lease commercial space, or sell property.
          </p>
          <p>Any unauthorized use is prohibited.</p>
          <p>
            Real estate registration is the legal process of recording ownership, transfer,
            or interest in a property with the appropriate government authority.
          </p>
          <p>Zarobi Builder & Property Advisor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
