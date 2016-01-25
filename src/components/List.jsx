import React from 'react';
import { connect } from 'react-redux';

import { toggleItem, deleteItem } from '../actions';
import ListItem from './ListItem';

class List extends React.Component {

  getItemsList() {
    const { items, onSelectItem, onDeleteItem } = this.props;
    const listItems = items.map((item, index) => {
      return <ListItem
        key={index}
        {...item}
        onSelect={() => {onSelectItem(index)}}
        onDelete={() => {onDeleteItem(index)}}
      />
    });
    return <ul>
      {listItems}
    </ul>;
  }

  render() {
    return <div className='list-wrapper'>
      <h2 className='list-wrapper__header'>{this.props.title}</h2>
      <div className='list-wrapper__body'>
        {this.getItemsList()}
      </div>
    </div>
  }
};

List.defaultProps = {
  items: [],
  onSelectItem: () => {},
  onDeleteItem: () => {}
};

export default List;