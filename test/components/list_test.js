import React from 'react';
import TestUtils from 'react-addons-test-utils';

import List from '../../src/components/List';
import ListItem from '../../src/components/ListItem';

const renderShallow = (element) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(element);
  return renderer.getRenderOutput();
};

describe("List", () => {
  let renderedList;
  const componentProps = {
    title: 'test title',
    items: [{
      name: 'test',
      completed: true
    }, {
      name: 'test2',
      completed: false
    }],
    onSelectItem: jasmine.createSpy(),
    onDeleteItem: jasmine.createSpy()
  };

  beforeAll(() => {
    renderedList = renderShallow(<List {...componentProps} />);
  });

  it('should render wrapper div with class: list-wrapper', () => {
    expect(renderedList.type).toBe('div');
    expect(renderedList.props.className).toBe('list-wrapper');
  });

  it('should render header and body div', () => {
    const [ header, body ] = renderedList.props.children;

    expect(header.type).toBe('h2');
    expect(header.props.className).toBe('list-wrapper__header');
    expect(header.props.children).toBe(componentProps.title);

    expect(body.type).toBe('div');
    expect(body.props.className).toBe('list-wrapper__body');
  });

  describe('items property', () => {
    let itemComponents;

    beforeAll(() => {
      const body = renderedList.props.children[1];
      const ul = body.props.children;
      itemComponents = ul.props.children;
    });

    it('should render list items components', () => {
      expect(itemComponents.length).toBe(componentProps.items.length);
      itemComponents.forEach((listItem, index) => {
        const inputComponentProps = componentProps.items[index];
        expect(listItem.type).toBe(ListItem);
        expect(listItem.props.name).toBe(inputComponentProps.name);
        expect(listItem.props.completed).toBe(inputComponentProps.completed);
      });
    });

    it('onSelectItem should be bound to selectItem callback of ListItem ', () => {
      itemComponents[0].props.onSelect();

      expect(componentProps.onSelectItem).toHaveBeenCalledWith(0);
      expect(componentProps.onSelectItem).not.toHaveBeenCalledWith(1);

      itemComponents[1].props.onDelete();

      expect(componentProps.onDeleteItem).toHaveBeenCalledWith(1);
      expect(componentProps.onDeleteItem).not.toHaveBeenCalledWith(0);

    });
  });
});