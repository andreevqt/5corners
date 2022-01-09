import {
  GET_ITEMS_ERROR,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_PENDING,
  INCREMENT_ITEM,
  DECREMENET_ITEM,
  REMOVE_ITEM
} from '../actions/cart';

const initialState = {
  items: [],
  isPending: false,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ITEMS_FULFILLED: {
      return { ...state, isPending: false, items: action.payload };
    }
    case GET_ITEMS_ERROR: {
      return { ...initialState, error: action.payload };
    }
    case GET_ITEMS_PENDING: {
      return { ...state, isPending: true };
    }
    case INCREMENT_ITEM: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((item) => (
          item.id === id
            ? { ...item, amount: ++item.amount }
            : item
        ))
      };
    }
    case DECREMENET_ITEM: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((item) => (
          item.id === id
            ? { ...item, amount: item.amount > 1 ? --item.amount : item.amount }
            : item
        ))
      };
    }
    case REMOVE_ITEM: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id)
      };
    }
    default: {
      return state;
    }
  }
};
