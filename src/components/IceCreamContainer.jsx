import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../store";

const IceCreamContainer = () => {
  const dispatch = useDispatch();
  /* to get data in initial State */
  const lele = useSelector((state) => state.iceCream.numOfIceCreams);
  return (
    <>
      <div>
        <h2>Number of Ice Creams - {lele}</h2>
        <button
          onClick={() => {
            dispatch(buyIceCream());
          }}
        >
          Buy Ice Cream
        </button>
      </div>
    </>
  );
};

export default IceCreamContainer;
