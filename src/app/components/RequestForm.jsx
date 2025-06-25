import React from 'react';

const RequestForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-400">
        Request Information
      </h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6D00] focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6D00] focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6D00] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6D00] focus:border-transparent"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#FF6D00] hover:bg-[#E55C00] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;