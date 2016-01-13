import React from 'react';
import ListItem from './ListItem';

class Lists extends React.Component {

  clickItemHandler(id) {
    alert(id);
  }

  getItemsList() {
    let items = this.props.items.map((item) => {
      return <ListItem
        name={item.name}
        onClick={() => {this.clickItemHandler(item.id)}} />
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