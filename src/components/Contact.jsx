import React from 'react';
import { FaDownload } from "react-icons/fa";
import cv from '../assets/cv.pdf';

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-24">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">Contact</h1>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Kudzai Munyama</h2>
          <p className="text-lg mb-4">
            {`Mutare, Zimbabwe`}
          </p>
          <div className="flex flex-col mb-8">
            <h3 className="text-2xl font-bold mb-2">Contact Details:</h3>
            <p className="text-lg mb-2">
              <span className="font-bold">Phone:</span> +263 771 392 149
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Email:</span> <a href="mailto:munyamakudzi@gmail.com" className="text-secondary hover:text-tertiary">munyamakudzi@gmail.com</a>
            </p>
          </div>
          <a href={cv} download className="bg-secondary py-2 px-4 rounded-lg text-off-white hover:bg-tertiary flex items-center">
            <FaDownload size={20} className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;