import React from "react";
import Container from "../../container/Container";
import { RecData } from "./data";
import Item from "../../card/Item";

const RecDeals = () => {
  return (
    <section>
      <Container>
        <header className="md:flex bg-blue-400 rounded-t-md px-10 py-3">
          <div className="hidden md:block">
            <h3 className="font-semibold border-b-4 text-white border-yellow-400 text-shadow-custom">
              Best Choices
            </h3>
            <h3 className="font-semibold border-b-4 text-white border-black text-shadow-custom">
              Better Prices
            </h3>
            <h3 className="font-semibold border-b-4 text-white border-blue-700 text-shadow-custom">
              Good Deals
            </h3>
          </div>
          <div className="flex justify-center items-center md:ml-20">
            <h3 className="text-white md:text-3xl font-Roboto font-semibold text-shadow-custom">
              Recommended Deals
            </h3>
          </div>
        </header>

        <div>
          {/* Check if RecData is not empty */}
          {RecData && RecData.length > 0 ? (
            <Item data={RecData} itemType="rec-deals" />
          ) : (
            <p className="text-center text-gray-600">
              No deals available at the moment.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default RecDeals;
