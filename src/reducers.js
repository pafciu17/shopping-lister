import { ADD_ITEM, TOGGLE_ITEM } from './actions';

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items:[...state.items,
        {
          name: action.name,
          completed: false
        }]
      };
    case TOGGLE_ITEM:
      return {
        items: state.items.map((item, index) => {
          if (index !== action.index) {
            return item;
          }
          return Object.assign({}, item, {
            completed: !item.completed
          });
        })
      };
    default:
      return state;
  }
};

export default rootReducer;