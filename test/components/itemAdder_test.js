import React from 'react';

import { renderShallow } from '../utils';

import { ItemAdder } from '../../src/components/ItemAdder';
import { addItem } from '../../src/actions';

const options = {
  dispatch: jasmine.createSpy()
};

describe('ItemAdder', () => {
  let renderedItemAdder;

  beforeAll(() => {
    renderedItemAdder = renderShallow(<ItemAdder {...options} />);
  });

  it('should be rendered as form with input and button', () => {
    expect(renderedItemAdder.type).toBe('form');
    const [input, button] = renderedItemAdder.props.children;

    expect(input.type).toBe('input');
    expect(input.props.className).toBe('item-adder__input');

    expect(button.type).toBe('button');
    expect(button.props.className).toBe('item-adder__btn');
  });

  it('should dispatch addItem on form submit', () => {
    const nameValue = 'test name';

    renderedItemAdder.props.onSubmit({
      target: {
        name: {
          value: nameValue
        }
      },
      preventDefault: () => {}
    });

    expect(options.dispatch).toHaveBeenCalledWith(addItem(nameValue));
  });

});