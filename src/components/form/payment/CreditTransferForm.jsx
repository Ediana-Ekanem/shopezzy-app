import React, { useState, useCallback } from "react";

const CreditCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (cardNumber.length < 16 || cvv.length < 3) {
        setError("Please check your card number or CVV.");
        return;
      }
      onSubmit({ cardNumber, expiryDate, cvv });
    },
    [cardNumber, expiryDate, cvv, onSubmit]
  );

  const handleCardNumberChange = useCallback((e) => {
    setCardNumber(e.target.value);
  }, []);

  const handleExpiryDateChange = useCallback((e) => {
    setExpiryDate(e.target.value);
  }, []);

  const handleCvvChange = useCallback((e) => {
    setCvv(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={handleExpiryDateChange}
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
          onChange={handleCvvChange}
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
