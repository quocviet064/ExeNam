import React from "react";
import PlantFinder from "./PlantFinder";
import SpookySeason from "./SpookySeason";

const SideSection = () => {
  return (
    <div className="flex flex-col md:w-1/3 space-y-4 mt-4 md:mt-0">
      <PlantFinder />
      <SpookySeason />
    </div>
  );
};

export default SideSection;
