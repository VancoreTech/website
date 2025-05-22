'use client';

import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 text-white text-xl">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="hover:text-blue-500 transition" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="hover:text-black transition" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="hover:text-blue-700 transition" />
      </a>
    </div>
  );
};

export default SocialIcons;
