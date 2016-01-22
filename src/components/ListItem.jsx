import React from 'react';

class ListItem extends React.Component {

  getCheckBtn() {
    return <input className='list-item__check' checked={this.props.completed}
      type='checkbox' onClick={this.props.onSelect} />;
  }

  getDeleteBtn() {
    if (this.props.onDelete) {
      return <span className='list-item__delete' onClick={this.props.onDelete}>DELETE</span>;
    }
    return '';
  }

  getItemLabel() {
    return <span className='list-item__label'
      onClick={this.props.onSelect}>{this.props.name}</span>;
  }

  render() {
    return <li className='list-item'>
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