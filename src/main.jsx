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
  // sabse pahile store banaya  fir usme todo ko todoreducer ya fir jitne bhi reducers honge usko pass kardeneka
// fir yeh provider to acess store wherever u want
// fir constants and uske baad actions
// bind mai actions ko bind dispatch ke sth
  // add todo wagera mai actions ko pass
  // action creators ko call



  
)
