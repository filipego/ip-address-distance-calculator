import React from 'react'
import ReactDOM from 'react-dom'
import './css/reset.css'
import './scss/styles.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
