

export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SEAT":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "LOG_OUT":
            return {
                ...state,
                user: null
            }
        case "RESET_BASKET":
            return {
                ...state,
                basket:[]
            }
        default:
            return {

            };
    }
};

export default reducer;

/* basket:state.basket.filter(item=> item.id !== action.id) */
