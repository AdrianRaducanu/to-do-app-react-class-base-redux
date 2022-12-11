const initialState = [
    // {
    //     name: "Gym",
    //     status: "uncompleted"
    // }
]

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case "DELETE": 
            return [...state.filter(el => el !== action.payload)]
        default:
            return state
    }
}

export default itemReducer;