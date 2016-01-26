import React from 'react';

import { renderShallow } from '../utils';

import ListItem from '../../src/components/ListItem'

describe('ListItem', () => {
  let renderedItem, input, labelElement, deleteElement;
  const inputProps = {
    name: 'test name',
    onSelect: () => {},
    onDelete: () => {}
  };

  beforeAll(() => {
    renderedItem = renderShallow(<ListItem {...inputProps} />);
    [ input, labelElement, deleteElement ]  = renderedItem.props.children;
  });

  it('should render correctly', () => {
    expect(renderedItem.type).toBe('li');
    expect(renderedItem.props.className).toBe('list-item');

    expect(input.type).toBe('input');
    expect(input.props.type).toBe('checkbox');
    expect(input.props.className).toBe('list-item__check');

    expect(labelElement.type).toBe('span');
    expect(labelElement.props.className).toBe('list-item__label');
    expect(labelElement.props.children).toBe(inputProps.name);

    expect(deleteElement.type).toBe('span');
    expect(deleteElement.props.className).toBe('list-item__delete');
    expect(deleteElement.props.children).toBe('DELETE');
  });

  it('onSelect props should be bound to onClick props of checkbox and label element', () => {
    expect(input.props.onClick).toBe(inputProps.onSelect);
    expect(labelElement.props.onClick).toBe(inputProps.onSelect);
  });

  it('onDelete props should be bound to onClick props of delete element', () => {
    expect(deleteElement.props.onClick).toBe(inputProps.onDelete);
  });
});