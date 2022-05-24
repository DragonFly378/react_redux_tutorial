const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

/* make reducer */
/** (previousState, action) => newState  */

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // untuk tetap mengambil semua isi dari state
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
