const defaultState = {
    cities: []
}


const ADD_CITIES = "ADD_CITIES"
const REMOVE_CITIES= "REMOVE_CITIES"
export const citiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CITIES:
            return {...state, cities: [...state.cities, action.payload]}
        case REMOVE_CITIES:
            return {...state, cities: state.cities.filter(cities => cities.id !== action.payload)}
        default:
            return state
    }
}

export const addCitiesAction = (payload) => ({type: ADD_CITIES, payload})
export const removeCitiesAction = (payload) => ({type: REMOVE_CITIES, payload})