import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store";

const CakeContainerHooks = () => {
  const dispatch = useDispatch();
  /* to get data in initial State */
  const capung = useSelector((state) => state.cake.numOfCakes);
  return (
    <>
      <div>
        <h2>Number of Cakes - {capung}</h2>
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
