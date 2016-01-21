import React from 'react';
import { connect } from 'react-redux'

import Header from './Header';
import List from './List';

class App extends React.Component {
  render() {
    const { items } = this.props;
    return <div>
      <Header title='ShopLISTER' />
      <div className='content'>
        <List title={'Shopping Lists'} />
      </div>
    </div>
  }
};

export default connect((state) => {
  return {
    items: state.items
  }
})(App);