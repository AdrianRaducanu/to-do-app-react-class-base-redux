import React,{Component} from "react"
import './App.css';
import './main-components/MainContainer.js'
import MainContainer from './main-components/MainContainer.js';
import HistoryContainer from './main-components/HistoryContainer.js';

class App extends Component {
    render(){
    return (
      <div className='app-div'>
        <MainContainer />
        <HistoryContainer />
      </div>
    );
  }
}

export default App;
