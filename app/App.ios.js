import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider, connect} from 'react-redux';

import store from '../src/store';
import {DrawerNavigations} from './main';

class App extends Component{

  render() {
    return(
      <Provider store={store}>
        <DrawerNavigations />
      </Provider>
    );
  }
}

export default App;
