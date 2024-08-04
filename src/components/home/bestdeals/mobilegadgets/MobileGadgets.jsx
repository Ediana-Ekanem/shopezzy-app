import React, { useMemo } from "react";
import { GadgetData } from "./data";
import Container from "../../../container/Container";
import Item from "../../../card/Item";

const MobileGadgets = () => {
  // Use useMemo to avoid recalculating GadgetData on each render
  const gadgets = useMemo(() => GadgetData, []);

  return (
    <div className="my-10">
      <div className="md:flex bg-blue-400 rounded-t-md px-10 py-5">
        <h3 className="text-2xl text-white font-semibold">Mobile Gadgets</h3>
      </div>
      <Container>
        <Item data={gadgets} itemType="mobile-gadgets" />
      </Container>
    </div>
  );
};

export default MobileGadgets;
