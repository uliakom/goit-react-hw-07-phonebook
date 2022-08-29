import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import  App  from 'components/App';
import './index.css';
import { store } from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/goit-react-hw-07-phonebook/">
    <Provider store={store}>
        <App />
      </Provider>
      </Router>
  </React.StrictMode>
);
