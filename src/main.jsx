/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />

</Provider>
// now redux store is available every where.
//now App.jsx



  
)
