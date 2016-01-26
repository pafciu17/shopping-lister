import {
    addItem, toggleItem, deleteItem,
    ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM
  } from '../../src/actions';

describe('actions', () => {

  it('addItem should create an action for adding item', () => {
    const name = 'test action';
    const expectedAction = {
      type: ADD_ITEM,
      name
    };
    expect(addItem(name)).toEqual(expectedAction);
  });

  it('toggleItem should create an action for toggling item completion state', () => {
    const index = 5;
    const expectedAction = {
      type: TOGGLE_ITEM,
      index
    };
    expect(toggleItem(index)).toEqual(expectedAction);
  });

  it('deleteItem should create an action for item deletion', () => {
    const index = 2;
    const expectedAction = {
      type: DELETE_ITEM,
      index
    };
    expect(deleteItem(index)).toEqual(expectedAction);
  });
});