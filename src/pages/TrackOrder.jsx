import React, { useState } from "react";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = async () => {
    // Clear previous errors
    setError("");
    setOrderStatus(null);
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (orderNumber.trim() === "") {
        setError("Order number cannot be empty.");
        return;
      }

      // Simulate order status response
      const simulatedStatus = {
        status: "In Transit",
        expectedDelivery: "August 10, 2024",
        details:
          "Your order is on its way and should arrive by the expected delivery date.",
      };
      setOrderStatus(simulatedStatus);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white text-black py-6 mt-5">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="text-3xl font-bold">Track Your Order</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Enter Your Order Number
          </h2>
          <div className="flex flex-col md:flex-row items-center mb-6">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Order Number"
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300"
              aria-label="Order Number"
            />
            <button
              onClick={handleTrackOrder}
              className="mt-4 md:mt-0 md:ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loader"></span> // Add a spinner component or text
              ) : (
                "Track Order"
              )}
            </button>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {orderStatus && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">
                  Status:{" "}
                  <span className="text-blue-500">{orderStatus.status}</span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Expected Delivery:{" "}
                  <span className="text-gray-700">
                    {orderStatus.expectedDelivery}
                  </span>
                </p>
                <p className="text-gray-600">{orderStatus.details}</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default TrackOrder;
