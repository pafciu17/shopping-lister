import React from 'react';
import { renderShallow } from '../utils';

import Header from '../../src/components/Header';

describe('Header', () => {
  let renderedHeader;
  const title = 'test title';

  beforeAll(() => {
    renderedHeader = renderShallow(<Header title={title} />);
  });

  it('has class: header', () => {
    expect(renderedHeader.props.className).toBe('header');
  });

  it('as a first child contains span with set inner html and defined header__title class', () => {
    const span = renderedHeader.props.children;

    expect(span.type).toBe('span');
    expect(span.props.className).toBe('header__title');
    expect(span.props.children).toBe(title);
  });
});