import Navigator from './src/navigation/Navigator';
import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/redux/Store'
import {Provider as StoreProvider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

export default App;
