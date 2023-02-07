import { all } from "redux-saga/effects";
import StocksData from "./Stocks/Stocks.saga";

export default function* rootSaga() {
    yield all([
        StocksData()
    ])
}