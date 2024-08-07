import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { sellerAuthState } from "../../../atoms/sellerAuthState";
import { useNavigate } from "react-router-dom";
import Container from "../../container/Container";

const DEMO_CREDENTIALS = {
  businessName: "edy&sons",
  email: "demo@seller.com",
  password: "password123",
};

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const setSellerAuth = useSetRecoilState(sellerAuthState);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password &&
      businessName === DEMO_CREDENTIALS.businessName
    ) {
      setSellerAuth(true);
      navigate("/postAd");
    } else {
      alert("Invalid credentials or business name. Please try again.");
    }
  };

  return (
    <>
      <Container>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center my-10 border w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
          aria-labelledby="login-form-title"
        >
          <h2 id="login-form-title" className="text-2xl font-bold mb-6">
            Seller Login
          </h2>

          <div className="w-full mb-4">
            <label
              htmlFor="business-name"
              className="block text-lg font-semibold mb-2"
            >
              Business Name
            </label>
            <input
              id="business-name"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
              placeholder="Business Name"
              required
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
              placeholder="Email"
              required
            />
          </div>

          <div className="w-full mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
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
      </Container>
    </>
  );
};

export default SellerLogin;
