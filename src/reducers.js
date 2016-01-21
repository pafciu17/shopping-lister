import { ADD_ITEM, COMPLETE_ITEM } from './actions';

const initialState = {
  items: [{
    name: 'test1'
  }]
};

const rootReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items:[...state.items,
        {
          name: action.name
        }]
    }
    default:
      return state;
  }
};

export default rootReducer;