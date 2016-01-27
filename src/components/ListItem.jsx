import React from 'react';

class ListItem extends React.Component {

  getCheckBtn() {
    return <input className='list-item__check' checked={this.props.completed}
      type='checkbox' onClick={this.props.onSelect} />;
  }

  getDeleteBtn() {
    return <span className='list-item__delete' onClick={this.props.onDelete}></span>;
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
  completed: false,
  name: '',
  onSelect: () => {},
  onDelete: () => {}
};

export default ListItem;