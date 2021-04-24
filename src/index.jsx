import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './redux/store';
import { GlobalStyleComponent } from './styles/GlobalStyled';
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <GlobalStyleComponent/>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

