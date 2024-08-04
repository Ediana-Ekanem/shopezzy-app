import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      // Submit the form data
    } else {
      setErrors(validationErrors);
    }
  };

  const backgroundImageUrl =
    "https://res.cloudinary.com/dminu0vmy/image/upload/f_auto,q_auto/apx3oodt6laswn5qzgwq.jpg";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20">
      <div className="flex w-[80%] max-w-[1000px] bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="w-1/2 relative hidden md:flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-200" />
          <LazyLoadImage
            alt="Background"
            effect="blur"
            src={backgroundImageUrl}
            className="w-full h-full object-cover"
            width="100%"
            height="100%"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 flex flex-col justify-center items-center px-10 py-32"
        >
          <h2 className="text-2xl font-bold mb-10 font-mono">Sign In</h2>

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
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
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
                errors.password ? "border-red-500" : ""
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

          <div className="flex justify-end w-full mb-4">
            <Link to="/forgot-password">
              <p className="text-blue-500 cursor-pointer underline underline-offset-4">
                Forgot password?
              </p>
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>

          <p className="mt-10 text-gray-500">
            Don't have an account yet?
            <Link to="/signup/buyer">
              <span className="text-blue-500 cursor-pointer underline underline-offset-4 ms-2">
                Sign Up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
