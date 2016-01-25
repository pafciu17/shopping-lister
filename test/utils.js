import React from 'react';
import TestUtils from 'react-addons-test-utils';

export const renderShallow = (element) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(element);
  return renderer.getRenderOutput();
};