import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../actions';

class ItemAdder extends React.Component {

  submit(e) {
    this.props.dispatch(addItem(e.target.name.value));
    e.target.name.value = '';
    e.preventDefault();
  }

  render() {
    return <form className='item-adder' onSubmit={this.submit.bind(this)}>
      <input className='item-adder__input' type='text' name='name' />
      <button className='item-adder__btn'>Add</button>
    </form>
  }
};

export default connect()(ItemAdder);