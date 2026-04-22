import { useState } from 'react';
import Trzy from './App2.jsx'
import './App.css';

function Dwa(){
  return (
    <>
      <p>To jest przykład wywoływania funkcji: </p>
      <Trzy />
    </>
  );
}

function App() {
  return (
    <>
      <Dwa />
      <h1>Hello World!</h1>
      <p>To jest napis!</p>
    </>
  );
}

export default App;
