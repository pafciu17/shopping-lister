export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOOGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_RECEIVE = 'FETCH_ITEMS_RECEIVE';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const addItem = (name) => {
  return {
    type: ADD_ITEM,
    name
  };
};

export const toggleItem = (index) => {
  return {
    type: TOGGLE_ITEM,
    index
  };
};

export const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    index
  };
};

const requestItems = () => {
  return {
    type: FETCH_ITEMS_REQUEST
  };
};

const receiveItems = (items) => {
  console.log(items);
  return {
    type: FETCH_ITEMS_RECEIVE,
    items
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(requestItems());
    // for time being only mock async
    setTimeout(() => {
      dispatch(receiveItems());
    }, 1000);
  };
};