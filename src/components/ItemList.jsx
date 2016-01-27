import React from 'react';
import { connect } from 'react-redux';

import { toggleItem, deleteItem } from '../actions';
import List from './List';
import ItemAdder from './ItemAdder';

class ItemList extends React.Component {

  selectItem(index) {
    this.props.dispatch(toggleItem(index));
  }

  deleteItem(index) {
    this.props.dispatch(deleteItem(index));
  }

  render() {
    const { items, title } = this.props;
    return <div>
        <List
        title={title}
        items={items}
        onSelectItem={this.selectItem.bind(this)}
        onDeleteItem={this.deleteItem.bind(this)} />
        <ItemAdder />
      </div>
  }
};

export default connect((state) => {
  return {
    items: state.items
  }
})(ItemList);