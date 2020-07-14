import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'
import { backup } from './backup.js'

ReactDOM.render(
    <Matrix values={backup} backup={backup}/>, document.getElementById('root'));
