export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOOGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

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