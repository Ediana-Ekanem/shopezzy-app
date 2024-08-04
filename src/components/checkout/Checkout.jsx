import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";
import CreditTransferForm from "../form/payment/CreditTransferForm";
import BankTransferForm from "../form/payment/BankTransferForm";
import Container from "../container/Container";
import { FaStar } from "react-icons/fa"; // Import FaStar for displaying stars

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.currentAmt * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (paymentMethod) {
      setIsModalOpen(true);
    } else {
      alert("Please select a payment method");
    }
  };

  const handlePaymentSubmit = (paymentDetails) => {
    // Handle the payment submission process here
    alert(`Payment successful with ${paymentMethod}`);
    console.log(paymentDetails);
    setIsModalOpen(false);
    setPaymentMethod(""); // Optionally reset payment method
  };

  const handleCancel = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="md:flex justify-between my-10 bg-blue-400 rounded-t-md px-10 py-5">
        <h3 className="text-2xl text-white font-semibold">Checkout</h3>
        <button
          className="text-2xl font-semibold text-white"
          onClick={handleCancel}
        >
          X
        </button>
      </div>

      <Container>
        <div className="flex flex-col items-center my-10">
          <p className="text-xl mb-10 font-mono">
            Please review your items and proceed with the payment
          </p>

          {cart.length === 0 ? (
            <p className="text-lg">Your cart is empty</p>
          ) : (
            <div className="w-full  mb-4">
              <ul className="mb-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between mb-4 p-4 bg-white shadow rounded-lg"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-cover mr-4 rounded"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">
                          #{item.currentAmt} x {item.quantity}
                        </p>
                        {/* Display the rating */}
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`w-5 h-5 ${
                                index < item.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">
                      #{item.currentAmt * item.quantity}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-4">
                <h4 className="text-xl font-bold">Total:</h4>
                <p className="text-2xl font-semibold">#{calculateTotal()}</p>
              </div>
            </div>
          )}

          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Select Payment Method:</h4>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  className="mr-2"
                  checked={paymentMethod === "Credit Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank Transfer"
                  className="mr-2"
                  checked={paymentMethod === "Bank Transfer"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Bank Transfer
              </label>
            </div>
          </div>
          <button
            className="py-2 px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 mb-5"
            onClick={handleCheckout}
          >
            Confirm and Pay
          </button>

          <CheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            {paymentMethod === "Credit Card" && (
              <CreditTransferForm onSubmit={handlePaymentSubmit} />
            )}
            {paymentMethod === "Bank Transfer" && (
              <BankTransferForm onSubmit={handlePaymentSubmit} />
            )}
          </CheckoutModal>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
