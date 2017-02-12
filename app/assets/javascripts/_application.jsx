import 'jquery'
import 'materialize-css'
//import lazyload from 'jquery-lazyload';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'

$(document).ready(function () {
  ReactDOM.render(  <Root/>,document.getElementById('app'));
});
