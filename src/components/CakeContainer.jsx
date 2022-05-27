import React from "react";

import { connect } from "react-redux";
import { buyCake } from "../store";

const CakeContainer = ({ buyCake, jumlahTersedia }) => {
  return (
    <>
      <div>
        <h2>Number of Cakes - {jumlahTersedia}</h2>
        <button onClick={buyCake}>Buy Cake</button>
      </div>
    </>
  );
};

// memanggil state dari redux
const mapStateToProps = (state) => {
  return {
    jumlahTersedia: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
