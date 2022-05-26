import React from "react";
import { useSelector } from "react-redux";

const CakeContainerHooks = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <>
      <div>
        <h2>hooks-Number of Cakes - {numOfCakes}</h2>
        <button>Buy Cake</button>
      </div>
    </>
  );
};

export default CakeContainerHooks;
