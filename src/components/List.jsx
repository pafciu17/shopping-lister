import React from 'react';
import { connect } from 'react-redux';

import { toggleItem } from '../actions';
import ItemAdder from './ItemAdder';
import ListItem from './ListItem';

class List extends React.Component {

  selectItem(index) {
    this.props.dispatch(toggleItem(index));
  }

  deleteItem(id) {
    console.log('delete: ' + id);
  }

  getItemsList() {
    const items = this.props.items.map((item, index) => {
      return <ListItem
        key={index}
        {...item}
        onSelect={() => {this.selectItem(index)}}
        onDelete={() => {this.deleteItem(index)}}
      />
    });
    return <ul>
      {items}
    </ul>;
  }

  render() {
    return <div className='list-wrapper'>
      <h2 className='list-wrapper__header'>{this.props.title}</h2>
      <div className='list-wrapper__body'>
        {this.getItemsList()}
      </div>
      <ItemAdder />
    </div>
  }
};

List.defaultProps = {
  items: []
};

export default connect((state) => {
  return {
    items: state.items
  }
})(List);