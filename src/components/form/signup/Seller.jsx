import React, { useState } from "react";

const Seller = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    homeAddress: "",
    cacNumber: "",
    businessCategory: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.businessName)
      newErrors.businessName = "Business Name is required";
    if (!formData.businessAddress)
      newErrors.businessAddress = "Business Address is required";
    if (!formData.homeAddress)
      newErrors.homeAddress = "Home Address is required";
    if (!formData.businessCategory)
      newErrors.businessCategory = "Business Category is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data to your backend or API
      console.log("Form Data Submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="px-5 md:px-0 w-[80%] md:max-w-[700px] rounded-xl bg-white shadow-xl md:py-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center md:px-24"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-14 font-mono">
            Business Registration
          </h2>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessName"
            >
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.businessName && "border-red-500"
              }`}
            />
            {errors.businessName && (
              <p className="text-red-500 text-xs mt-2">{errors.businessName}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessAddress"
            >
              Business Address
            </label>
            <input
              id="businessAddress"
              type="text"
              placeholder="Business Address"
              value={formData.businessAddress}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.businessAddress && "border-red-500"
              }`}
            />
            {errors.businessAddress && (
              <p className="text-red-500 text-xs mt-2">
                {errors.businessAddress}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="homeAddress"
            >
              Home Address
            </label>
            <input
              id="homeAddress"
              type="text"
              placeholder="Home Address"
              value={formData.homeAddress}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.homeAddress && "border-red-500"
              }`}
            />
            {errors.homeAddress && (
              <p className="text-red-500 text-xs mt-2">{errors.homeAddress}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cacNumber"
            >
              CAC Number (optional)
            </label>
            <input
              id="cacNumber"
              type="text"
              placeholder="CAC Number"
              value={formData.cacNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessCategory"
            >
              Business Category
            </label>
            <select
              id="businessCategory"
              value={formData.businessCategory}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.businessCategory && "border-red-500"
              }`}
            >
              <option value="">Select Category</option>
              <option value="Retail">Retail</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
            </select>
            {errors.businessCategory && (
              <p className="text-red-500 text-xs mt-2">
                {errors.businessCategory}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phoneNumber && "border-red-500"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-2">{errors.phoneNumber}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register Business
          </button>
        </form>
      </div>
    </div>
  );
};

export default Seller;
