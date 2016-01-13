import React from 'react';
import Header from './Header';
import Lists from './Lists';

export default class App extends React.Component {
  render() {
    let items = [{
      id: 1,
      name: 'test'
    }, {
      id: 2,
      name: 'test2'
    }];
    return <div>
      <Header title='ShopLISTER' />
      <Lists items={items}/>
    </div>
  }
};