/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import Showcase from './Showcase';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
