import { ERROR, GET_STOCKS } from "./Stocks.type"

const initialState = {
    stocks : [],
    error : "",
}

export default function getStocksData(state=initialState,action) {
    switch (action.type){
        case GET_STOCKS : 
        return {
            ...state,
            stocks : action.payload
        }
        case ERROR : 
        return {
            ...state,
            error : action.payload
        }
        default : 
        return state
    }
}