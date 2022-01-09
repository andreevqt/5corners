import api from '../api/shop';

export const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
export const GET_ITEMS_FULFILLED = 'GET_ITEMS_FULFILLED';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENET_ITEM = 'DECREMENT_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const incrementItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id
});

export const decrementItem = (id) => ({
  type: DECREMENET_ITEM,
  payload: id
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});

export const setPending = () => ({
  type: GET_ITEMS_PENDING
});

export const setItems = (items) => ({
  type: GET_ITEMS_FULFILLED,
  payload: items
});

export const setError = (err) => ({
  type: GET_ITEMS_ERROR,
  payload: err
});

export const getItems = () => async (dispatch) => {
  dispatch(setPending());
  try {
    const items = await api.cart.get();
    dispatch(setItems(items));
  } catch (err) {
    dispatch(setError(err));
  }
};
