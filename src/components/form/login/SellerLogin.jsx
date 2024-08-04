import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { sellerAuthState } from "../../../atoms/sellerAuthState";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState(""); // New state for business name
  const setSellerAuth = useSetRecoilState(sellerAuthState);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    const demoBusinessName = "edy&sons";
    const demoEmail = "demo@seller.com";
    const demoPassword = "password123";

    if (
      email === demoEmail &&
      password === demoPassword &&
      businessName === demoBusinessName
    ) {
      setSellerAuth(true);
      navigate("/postAd"); // Navigate to the protected route
    } else {
      alert("Invalid credentials or business name. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center my-10 border w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Seller Login</h2>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">
          Business Name
        </label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          placeholder="Business Name"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          placeholder="Email"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="py-2 px-6 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default SellerLogin;
