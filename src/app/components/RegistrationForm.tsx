"use client";

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO:  need to implement  google sheet to save the user data 
    // And Impletement the IMAP server Or We can  use firebase 
    console.log('Form Data Submitted:', formData);
    alert('Registration submitted!  Need to be linked with the database .');  
    //  After Form submision Logic -->   when user submit the form user should receive the email    with thank you message for the successfully registration and receive the payment link 
    // Reset form after submission  
    setFormData({ name: '', email: '', affiliation: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">
          Affiliation (Organization/Institution)
        </label>
        <input
          type="text"
          name="affiliation"
          id="affiliation"
          required
          value={formData.affiliation}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[#002060] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;