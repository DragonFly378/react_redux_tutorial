import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store";

const CakeContainerHooks = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <>
      <div>
        <h2>hooks-Number of Cakes - {numOfCakes}</h2>
        <button
          onClick={() => {
            dispatch(buyCake());
          }}
        >
          Buy Cake
        </button>
      </div>
    </>
  );
};

export default CakeContainerHooks;
