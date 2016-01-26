import { initialState, rootReducer } from '../src/reducers';
import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../src/actions';

const createStateItems = (...items) => {
  return items.map((item) => {
    return {
      name: item[0],
      completed: !!item[1]
    };
  });
};

describe('rootReducer', () => {
  it('at first it should return the initial state', () => {
    const state = rootReducer();
    expect(state).toEqual(initialState);
  });

  it('should add new item for ADD_TODO', () => {
    const name = 'test item';
    const newState = rootReducer({
      items: []
    }, {
      type: ADD_ITEM,
      name
    });
    const expectedState = {
      items: [{
        name,
        completed: false
      }]
    };

    expect(newState).toEqual(expectedState);
  });

  it('should toggle item complete property for TOGGLE_ITEM', () => {
    const index = 1;
    const newState = rootReducer({
      items: createStateItems(['test1'], ['test2', false])
    }, {
      type: TOGGLE_ITEM,
      index
    });

    const expectedState = {
      items: createStateItems(['test1'], ['test2', true])
    };

    expect(newState).toEqual(expectedState);
  });

  it('should delete item for DELETE_ITEM', () => {
    const index = 1;
    const newState = rootReducer({
      items: createStateItems(['test1'], ['test2'], ['test3'])
    }, {
      type: DELETE_ITEM,
      index
    });

    const expectedState = {
      items: createStateItems(['test1'], ['test3'])
    };

    expect(newState).toEqual(expectedState);
  });

});