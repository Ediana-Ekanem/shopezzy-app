import React, { useState } from "react";

const CreditCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.length < 16 || cvv.length < 3) {
      setError("Please check your card number or CVV.");
      return;
    }
    onSubmit({ cardNumber, expiryDate, cvv });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="py-2 px-6 sm:px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CreditCardForm;
