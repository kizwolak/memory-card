import React from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <Board />
    </div>
  )
}

