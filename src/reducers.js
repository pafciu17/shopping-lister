import { ADD_ITEM, COMPLETE_ITEM } from './actions';

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, {
        name: action.name
      }]
    default:
      return state;
  }
};

export default rootReducer;