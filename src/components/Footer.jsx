import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" w-full bottom-0 text-center p-4 text-gray-500 bg-gray-100">
      &copy; {currentYear} <a href="/" className="text-primary hover:text-blue-800">kudzaimunyama.dev</a>. All rights reserved.
      <br />
     
    </div>
  );
};

export default Footer;