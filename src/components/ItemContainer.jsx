import React from "react";
import { connect } from "react-redux";

function ItemContainer({ stok }) {
  return (
    <div>
      <h2>Jumlah stok - {stok}</h2>
    </div>
  );
}

// memanggil state dari redux
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    stok: itemState,
    // barang: state
  };
};
export default connect(mapStateToProps)(ItemContainer);
