import React from 'react';
import { connect } from 'react-redux';


import ItemAdder from './ItemAdder';
import ListItem from './ListItem';

class List extends React.Component {

  getDefaultProps() {
    return {
      items: []
    };
  }

  selectItem(id) {
    console.log('select: ' + id);
  }

  deleteItem(id) {
    console.log('delete: ' + id);
  }

  getItemsList() {
    const items = this.props.items.map((item, index) => {
      return <ListItem
        key={index}
        name={item.name}
        onSelect={() => {this.selectItem(item.id)}}
        onDelete={() => {this.deleteItem(item.id)}}
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
})(List)