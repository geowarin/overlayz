import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import './styles/index.css';

import {startReportingRuntimeErrors} from "react-error-overlay";

startReportingRuntimeErrors({
  filename: '/static/js/bundle.js',
});

ReactDOM.render(
  <App />, document.getElementById('root'));

