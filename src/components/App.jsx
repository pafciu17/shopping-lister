import React from 'react';
import { connect } from 'react-redux'

import Header from './Header';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return <div>
      <Header title='ShopLISTER' />
      <div className='content'>
        <ItemList title={'To do'} />
      </div>
    </div>
  }
};

export default App;