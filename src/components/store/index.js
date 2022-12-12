import { createStore, combineReducers } from "redux"
import { citiesReducer } from "./citiesReducer"
import { trueReducer } from "./trueReducer"


const rootReducer = combineReducers(
    {
        cities: citiesReducer,
        flag: trueReducer,
    }
)

export const store = createStore(rootReducer)