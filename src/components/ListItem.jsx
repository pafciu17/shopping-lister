import React from 'react';
import classnames from 'classnames';

class ListItem extends React.Component {

  getCheckBtn() {
    return <input className='list-item__check' checked={this.props.completed}
      type='checkbox' onClick={this.props.onSelect} />;
  }

  getDeleteBtn() {
    return <span className='list-item__delete' onClick={this.props.onDelete}></span>;
  }

  getItemLabel() {
    const className = classnames('list-item__label', { 'list-item__label--checked': this.props.completed });
    return <span className={className}
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