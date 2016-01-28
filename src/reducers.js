import {
  ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM,
  FETCH_ITEMS_REQUEST, FETCH_ITEMS_RECEIVE
} from './actions';


export const initialState = {
  isFetching: false,
  items: []
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        name: action.name,
        completed: false
      };
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

export const rootReducer = (state = initialState, action = {}) => {
  console.log(state);
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
    case DELETE_ITEM:
      return {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      };
    case FETCH_ITEMS_REQUEST:
      return {
        isFetching: true,
        items: [...state.items]
      };
    case FETCH_ITEMS_RECEIVE:
      return {
        isFetching: false,
        items: [...action.items]
      };
    default:
      return state;
  }
};

export default rootReducer;