import React from "react";

import { connect } from "react-redux";
import { buyCake } from "../store";

const CakeContainer = ({ buyCake, numOfCakes }) => {
  return (
    <>
      <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={buyCake}>Buy Cake</button>
      </div>
    </>
  );
};

// memanggil state dari redux
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
