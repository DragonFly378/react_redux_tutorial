const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICEREAM";

/* create actions */
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

/* make reducer */
/** (previousState, action) => newState  */
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // untuk tetap mengambil semua isi dari state
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
