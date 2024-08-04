import React from "react";
import Container from "../../container/Container";
import { RecData } from "./data";
import Item from "../../card/Item";

const RecDeals = () => {
  return (
    <div>
      <Container>
        <div className="md:flex bg-blue-400 rounded-t-md px-10 py-3">
          <div className="text-shadow-custom hidden md:block ">
            <h3 className="font-semibold border-b-4 text-white border-yellow-400">
              Best Choices
            </h3>
            <h3 className="font-semibold border-b-4 text-white border-black">
              Better Prices
            </h3>
            <h3 className="font-semibold border-b-4 text-white border-blue-700">
              Good Deals
            </h3>
          </div>
          <div className="flex justify-center items-center md:ml-20">
            <h3 className="text-white md:text-3xl font-Roboto font-semibold text-shadow-custom">
              Recommended Deals
            </h3>
          </div>
        </div>

        <div>
          <Item data={RecData} itemType="rec-deals" />
        </div>
      </Container>
    </div>
  );
};

export default RecDeals;
