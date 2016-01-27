import React from 'react';
import { connect } from 'react-redux'

import Header from './Header';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return <div>
      <div className='content'>
        <ItemList title={'To do'} />
      </div>
    </div>
  }
};

export default App;