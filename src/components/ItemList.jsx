import React from 'react';
import { connect } from 'react-redux';

import { toggleItem, deleteItem } from '../actions';
import List from './List';

class ItemList extends React.Component {

  selectItem(index) {
    this.props.dispatch(toggleItem(index));
  }

  deleteItem(index) {
    this.props.dispatch(deleteItem(index));
  }

  render() {
    const { items } = this.props;
    return <List
      items={items}
      onSelectItem={this.selectItem.bind(this)}
      onDeleteItem={this.deleteItem.bind(this)}
    />
  }
};

export default connect((state) => {
  return {
    items: state.items
  }
})(ItemList);