import React, { useState, useCallback } from "react";

const BankTransferForm = ({ onSubmit }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit({ accountNumber, bankName });
    },
    [accountNumber, bankName, onSubmit]
  );

  const handleAccountNumberChange = useCallback((e) => {
    setAccountNumber(e.target.value);
  }, []);

  const handleBankNameChange = useCallback((e) => {
    setBankName(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">
          Account Number
        </label>
        <input
          type="text"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg font-semibold mb-2">Bank Name</label>
        <input
          type="text"
          value={bankName}
          onChange={handleBankNameChange}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="py-2 px-6 sm:px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Pay Now
      </button>
    </form>
  );
};

export default BankTransferForm;
