import React from 'react';
import { connect } from 'react-redux'

import Header from './Header';
import Lists from './Lists';

class App extends React.Component {
  render() {
    console.log('here: ' + this.props.items);
    let items = [{
      id: 1,
      name: 'test'
    }, {
      id: 2,
      name: 'test2'
    }];
    return <div>
      <Header title='ShopLISTER' />
      <div className='content'>
        <Lists title={'Shopping Lists'} items={items}/>
      </div>
    </div>
  }
};

export default connect((state) => {
  return {
    items: state.items
  }
})(App)