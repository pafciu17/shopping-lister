import { ADD_ITEM, TOGGLE_ITEM } from './actions';

const initialState = {
  items: []
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        name: action.name,
        completed: false
      }
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        completed: !state.completed
      });
  }
};

const rootReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items:[
          ...state.items,
          itemReducer(undefined, action)
        ]
      };
    case TOGGLE_ITEM:
      return {
        items: state.items.map((item, index) => {
          if (index !== action.index) {
            return item;
          }
          return itemReducer(item, action);
        })
      };
    default:
      return state;
  }
};

export default rootReducer;