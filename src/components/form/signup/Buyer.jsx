import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Buyer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center px-5 md:px-28 w-[80%] max-w-[600px] py-10 rounded-xl bg-white shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-mono">SignUp</h2>

        <div className="relative w-full mb-4">
          <input
            id="googleSignup"
            type="text"
            placeholder="Sign up with Google"
            className="shadow appearance-none border rounded w-full ps-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FcGoogle size={18} className="absolute top-1/3 left-2" />
        </div>

        <div className="flex items-center w-full my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="w-full mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
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

        <div className="w-full mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && "border-red-500"
            }`}
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiOutlineEye
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
          {errors.password && (
            <p className="text-red-500 text-xs mt-2">{errors.password}</p>
          )}
        </div>

        <div className="w-full mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword && "border-red-500"
            }`}
          />
          {showConfirmPassword ? (
            <AiOutlineEyeInvisible
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <AiOutlineEye
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Buyer;
