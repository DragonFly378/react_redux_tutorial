import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../store";

const NewIceCreamContainer = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  /* to get data in initial State */
  const lele = useSelector((state) => state.iceCream.numOfIceCreams);
  return (
    <>
      <div>
        <h2>Number of Ice Creams - {lele}</h2>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(buyIceCream(number));
          }}
        >
          Buy {number} Ice Cream
        </button>
      </div>
    </>
  );
};

export default NewIceCreamContainer;
