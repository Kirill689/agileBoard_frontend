import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AgileBoard from './components/AgileBoard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddTask from './components/task/AddTask';
import UpdateTask from './components/task/UpdateTask';

class App extends Component {

  render(){
    return(
      <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={AgileBoard}/>
        <Route exact path="/addTask" component={AddTask}/>
        <Route exact path="/updateTask" component={UpdateTask}/>
      </div>
      </Router>
    )
  }

}

export default App;
