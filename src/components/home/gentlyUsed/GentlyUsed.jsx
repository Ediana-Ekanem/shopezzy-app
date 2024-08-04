import React from "react";
import Container from "../../container/Container";
import { GentlyUsedData } from "../gentlyUsed/data";
import Item from "../../card/Item";

const GentlyUsed = () => {
  return (
    <div>
      <Container>
        <div className="md:flex   bg-black/85 rounded-t-md px-10 py-10">
          <div className="text hidden md:block "></div>
          <div className="flex justify-center items-center md:ml-20">
            <h3 className="text-white  md:text-3xl font-Roboto font-semibold text-shadow-custom ">
              Gently Used Items
            </h3>
          </div>
        </div>

        <div>
          <Item data={GentlyUsedData} itemType="gently-used" />
        </div>
      </Container>
    </div>
  );
};

export default GentlyUsed;
