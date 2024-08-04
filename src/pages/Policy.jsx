import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white text-black  py-6 mt-5">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="text-3xl font-bold">ShopEzzy Return Policy</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Return Policy</h2>
          <p className="mb-4 text-gray-700">
            At ShopEzzy, your satisfaction is our priority. If you are not
            entirely happy with your purchase, you can return the item within 30
            days of receiving it for a full refund or exchange.
          </p>
          <h3 className="text-xl font-semibold mb-2">Eligibility Criteria</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              Returns must be initiated within 30 days from the date of
              delivery.
            </li>
            <li>
              The item should be in its original, unused condition with all
              packaging, labels, and tags intact.
            </li>
            <li>
              For items purchased on sale or as part of a special promotion,
              returns may be subject to specific terms and conditions.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">How to Return an Item</h3>
          <p className="mb-4 text-gray-700">
            Follow these simple steps to return an item:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-700">
            <li>
              Contact our customer support team at{" "}
              <a
                href="mailto:support@shopezzy.com"
                className="text-blue-500 underline"
              >
                support@shopezzy.com
              </a>{" "}
              to request a return authorization.
            </li>
            <li>
              Pack the item securely in its original packaging, including any
              accessories or manuals.
            </li>
            <li>
              Include a copy of your original receipt or order confirmation with
              the return package.
            </li>
            <li>
              Send the package to the address provided by our customer service
              team.
            </li>
            <li>
              Once we receive the item, we will process your return and issue a
              refund or exchange according to your preference.
            </li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Refunds</h3>
          <p className="mb-4 text-gray-700">
            Refunds will be issued to your original payment method within 7-10
            business days after we receive the returned item. Please note that
            shipping fees are non-refundable.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exchanges</h3>
          <p className="mb-4 text-gray-700">
            If you wish to exchange an item for a different size, color, or
            product, please contact our customer support team to facilitate the
            exchange.
          </p>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">
            For any questions or additional support regarding our return policy,
            please reach out to our customer support team:
          </p>
          <p className="text-blue-500">
            <a href="mailto:support@shopezzy.com" className="underline">
              support@shopezzy.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default ReturnPolicy;
