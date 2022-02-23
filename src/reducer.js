export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price.replace(',', '')) + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
      
    case "REMOVE_FROM_CART":
      // return {
      // the following commented doesnt work because, if we have two same items, upon removing
      //one from the basket, both items will be removed.
      // ...state,
      // basket: state.basket.filter(item => item.id !== action.id)
      // }
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        // cut that element
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
      case "SET_USER":
        return{
          ...state,
          user:action.user
        }
    default:
      return state;
  }
};

export default reducer;