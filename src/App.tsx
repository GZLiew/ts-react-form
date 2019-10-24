import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import { Header } from './components/Header/Header';
import { Routes } from './routes';

const headerLinks = [
  {
    title: "home",
    path: ""
  },
  {
    title: "contact",
    path: "contact"
  },
  {
    title: "John",
    path: "profile/John"
  }
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="TS React" links={headerLinks} />
        <Routes />
      </div>  
    </BrowserRouter>
  );
}

export default App;
