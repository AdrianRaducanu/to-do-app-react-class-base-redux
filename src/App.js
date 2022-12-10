import React,{Component} from "react"
import ReactDOM from "react-dom"
import './App.css';
import './main-components/MainContainer.js'
import MainContainer from './main-components/MainContainer.js';
import HistoryContainer from './main-components/HistoryContainer.js';

function App() {
  return (
    <div className='app-div'>
      <MainContainer />
      <HistoryContainer />
    </div>
  );
}

export default App;
