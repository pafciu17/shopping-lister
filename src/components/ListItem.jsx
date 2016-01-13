import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li onClick={this.props.onClick}>
      {this.props.name}
    </li>
  }
};

ListItem.defaultProps = {
  onClick: () => {}
};

export default ListItem;