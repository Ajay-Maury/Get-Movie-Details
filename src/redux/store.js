import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailReducer } from "./detail/reducer";
import { search_PageReducer } from "./search-pagination/reducer";
import { trendingReducer } from "./trending/reducer";

const rootReducer = combineReducers({
  trendingData: trendingReducer,
  detail: detailReducer,
  Name_Page : search_PageReducer,
});
const store = legacy_createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)))
    // console.log(90, store);
// store.subscribe(() => console.log(store.getState()))
  export default store;