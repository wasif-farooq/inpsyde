import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import create from './store';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-column-toggle.html

const store = create({});

const Root = () => {
    return (
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
      </React.StrictMode>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
