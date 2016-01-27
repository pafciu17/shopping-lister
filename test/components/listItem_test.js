import React from 'react';

import { renderShallow } from '../utils';

import ListItem from '../../src/components/ListItem'

describe('ListItem', () => {
  let renderedItem, input, labelElement, deleteElement;

  describe('for incomplete item', () => {
    const inputProps = {
      name: 'test name',
      onSelect: () => {},
      onDelete: () => {},
      completed: false
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
      expect(labelElement.props.className).toContain('list-item__label');
      expect(labelElement.props.children).toBe(inputProps.name);

      expect(deleteElement.type).toBe('span');
      expect(deleteElement.props.className).toBe('list-item__delete');
    });

    it('onSelect props should be bound to onClick props of checkbox and label element', () => {
      expect(input.props.onClick).toBe(inputProps.onSelect);
      expect(labelElement.props.onClick).toBe(inputProps.onSelect);
    });

    it('onDelete props should be bound to onClick props of delete element', () => {
      expect(deleteElement.props.onClick).toBe(inputProps.onDelete);
    });

    it('should mark item as not checked one', () => {
      expect(input.props.checked).toBeFalsy();
      expect(labelElement.props.className).not.toContain('list-item__label--checked');
    });
  });

  describe('for complete item', () => {
    const inputProps = {
      name: 'test name',
      completed: true
    };

    beforeAll(() => {
      renderedItem = renderShallow(<ListItem {...inputProps} />);
      [ input, labelElement, deleteElement ]  = renderedItem.props.children;
    });

    it('should mark item as checked on', () => {
      expect(input.props.checked).toBeTruthy();
      expect(labelElement.props.className).toContain('list-item__label--checked');
    });
  });

});