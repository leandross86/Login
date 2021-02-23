import React from 'react';
import { Provider } from 'react-redux'
import { View } from 'react-native';

import { store } from './redux'
import Login from './screens/SignIn';
const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
