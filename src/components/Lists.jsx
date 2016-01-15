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
    const items = this.props.items.map((item) => {
      return <ListItem
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
    return <div>
      {this.getItemsList()}
    </div>
  }
};

Lists.defaultProps = {
  items: []
};

export default Lists;