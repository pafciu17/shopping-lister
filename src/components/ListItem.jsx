import React from 'react';

class ListItem extends React.Component {

  getCheckBtn() {
    if (this.props.onCheck) {
      return <span onClick={this.props.onCheck}>Check</span>
    }
    return '';
  }

  getDeleteBtn() {
    if (this.props.onDelete) {
      return <span onClick={this.props.onDelete}>Delete</span>
    }
    return '';
  }

  getItemLabel() {
    return <span onClick={this.props.onSelect}>{this.props.name}</span>;
  }

  render() {
    return <li>
      {this.getCheckBtn()}
      {this.getItemLabel()}
      {this.getDeleteBtn()}
    </li>
  }
};

ListItem.defaultProps = {
  onSelect: () => {},
  onCheck: null,
  onDelete: null
};

export default ListItem;