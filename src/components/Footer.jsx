import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 py-6 text-orange-50">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0">
        <div className="mb-4 flex space-x-4">
          <a href="#" className="">
            <FaFacebookF className="" size={20} />
          </a>
          <a href="#" className="">
            <FaXTwitter className="" size={20} />
          </a>
          <a href="#" className="">
            <FaInstagram className="" size={20} />
          </a>
          <a href="#" className="">
            <FaLinkedin className="" size={20} />
          </a>
        </div>

        <div className="text-sm opacity-50">
          © {new Date().getFullYear()} AdCarrot. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
