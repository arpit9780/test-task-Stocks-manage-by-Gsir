import { combineReducers } from "redux";
import getStocksData from "./Stocks/Stocks.reducer";

const rootReducer = combineReducers({
    stocksData : getStocksData
})

export default rootReducer