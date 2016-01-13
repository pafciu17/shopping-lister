import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';

import Header from '../../src/components/Header';

describe("Header", () => {
  it("renders test component text", () => {
    var title = 'test title'
    var header = TestUtils.renderIntoDocument(<Header title={title}/>);
    var domeNode = ReactDom.findDOMNode(header);
    expect(domeNode.innerHTML).toContain(title);
  });
});