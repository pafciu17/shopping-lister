import React from 'react';
import ListItem from './ListItem';

class Lists extends React.Component {

  selectItem(id) {
    console.log('select: ' + id);
  }

  checkItem(id) {
    console.log('check: ' + id);
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
        onCheck={() => {this.checkItem(item.id)}}
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
    </div>
  }
};

Lists.defaultProps = {
  items: []
};

export default Lists;