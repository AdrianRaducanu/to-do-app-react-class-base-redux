export const addItem = (item) => {
    return {
        type : "ADD",
        payload: item
    } 
} 

export const deleteItem = (item) => {
    return {
        type: "DELETE",
        payload: item
    }
}