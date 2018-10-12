import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import 'normalize-scss/sass/_normalize.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';



const appContainer = document.querySelector('#app');
ReactDOM.render(<AppRouter />, appContainer);