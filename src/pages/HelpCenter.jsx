import React from "react";
// import HelpPage from "../components/helpcenter/HelpPage";

const HelpCenter = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white text-black  py-6 mt-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg border border-gray-300"
          />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How to use the app</h3>
              <p className="text-gray-600">
                Find out how to get started with our app and make the most of
                its features.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Account Management</h3>
              <p className="text-gray-600">
                Learn how to manage your account settings, privacy, and
                security.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Billing and Payments
              </h3>
              <p className="text-gray-600">
                Get help with your billing, payments, and subscription
                management.
              </p>
            </div>
            {/* Add more topics as needed */}
          </div>
        </section>
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Submit a Request</h2>
          <p className="text-gray-600 mb-4">
            If you need further assistance, please submit a request and our
            support team will get back to you.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HelpCenter;
