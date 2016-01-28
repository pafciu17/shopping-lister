export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOOGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const FETCH_STATE_REQUEST = 'FETCH_STATE_REQUEST';
export const FETCH_STATE_RECEIVE = 'FETCH_STATE_RECEIVE';
export const FETCH_STATE_FAILURE = 'FETCH_STATE_FAILURE';

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

const requestState = () => {
  return {
    type: FETCH_STATE_REQUEST
  };
};

const receiveState = (state) => {
  return {
    type: FETCH_STATE_RECEIVE,
    state
  };
};

export const fetchState = () => {
  return (dispatch) => {
    dispatch(requestState());
    // for time being only mock async
    setTimeout(() => {
      dispatch(receiveState());
    }, 5000);
  };
};