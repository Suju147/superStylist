import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  prodSummerProdReducer,
  prodWinterProdReducer,
  prodOfficeProdReducer,
  prodWeddingProdReducer,
  womenOfficeProdReducer,
  womenSummerProdReducer,
  womenWeddingProdReducer,
  womenWinterProdReducer,
} from "./reducers/productsReducer";
import { loginreducer, setFav } from "./reducers/userReducers";
import {alertReducer} from "./reducers/alert";

const reducer = combineReducers({
  MensSummer: prodSummerProdReducer,
  MensWinter: prodWinterProdReducer,
  MensOffice: prodOfficeProdReducer,
  MensWedding: prodWeddingProdReducer,
  WomenSummer: womenSummerProdReducer,
  WomenWinter: womenWinterProdReducer,
  WomenOffice: womenOfficeProdReducer,
  WomenWedding: womenWeddingProdReducer,
  user: loginreducer,
  favourites: setFav,
  alert:alertReducer,
});

// const user = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

const initialState = {
  //   user: {
  // user: user,
  //   },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
