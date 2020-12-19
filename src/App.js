import React from 'react';
import './App.css'
import Routes from './routes/router'
import {BrowserRouter} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}
