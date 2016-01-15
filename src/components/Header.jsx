import React from 'react';

export default class Header extends React.Component {
  render() {
    return <div className='header'>
      <span className='header__title'>{this.props.title}</span>
    </div>
  }
};