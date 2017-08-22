import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import './styles/index.css';

import {inject} from "react-error-overlay";

inject();

ReactDOM.render(
  <App />, document.getElementById('root'));

