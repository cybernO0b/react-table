const defaultState = {
    flag: false
}

// const THIS_TRUE = "THIS_TRUE"
// const THIS_FALSE = "THIS_FALSE"
export const trueReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "THIS_TRUE":
            return {...state, flag: true}
        case "THIS_FALSE":
            return {...state, flag: false}
            
        default:
            return state
    }
}