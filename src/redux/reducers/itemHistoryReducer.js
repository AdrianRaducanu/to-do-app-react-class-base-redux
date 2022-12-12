const initialState = [];

const itemHistoryReducer = (state = initialState, action) => {
    if(action.type === "ADD_HISTORY") {
        return [...state, action.payload];
    } else {
        return state;
    }
}

export default itemHistoryReducer;