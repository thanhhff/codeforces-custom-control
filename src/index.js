import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './components/App';
import { store } from './store/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const Main = withRouter((props) => <App {...props} />); //eslint-disable-line

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
