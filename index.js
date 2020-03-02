import React from 'react';
import ReactDom from 'react-dom'
import MoviesApp from './app';
import './styles.scss';

const rootElement = document.getElementById('react-app');

ReactDom.render(<MoviesApp />, rootElement);   