import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../actions';

class ItemAdder extends React.Component {
  render() {
    const { dispatch } = this.props;
    return <div>
      <input type='text' />
      <span onClick={() => {
        dispatch(addItem('test item'));
      }} >Add</span>
    </div>
  }
};

export default connect()(ItemAdder);