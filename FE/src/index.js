import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './component/stores';
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
