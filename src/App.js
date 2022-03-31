import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Sitio en construcción"/>
    </div>
  );
}

export default App;
