export const ADD_ITEM = 'ADD_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export const addItem = (name) => {
  console.log('action name: ' + name);
  return {
    type: ADD_ITEM,
    name
  };
};

export const completeItem = (id) => {
  return {
    type: COMPLETE_ITEM,
    id
  }
};