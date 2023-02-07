import { Instance } from "../Api/Service";
import { ERROR, GET_DATA, GET_STOCKS,  } from "./Stocks.type";
import { takeEvery, put, call } from "redux-saga/effects"

function getApi() { return Instance.get("/mockdata").then(res => res.data) }

function* fetchData() {
    try { 
        const response = yield call(getApi);
        yield put({ type: GET_STOCKS, payload: response })
    }
    catch (error) {
        yield put({ type: ERROR, payload: error })
    }
}
function* StocksData() {
    yield takeEvery(GET_DATA, fetchData);
}

export default StocksData;