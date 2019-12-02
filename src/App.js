import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AgileBoard from './components/AgileBoard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddTask from './components/task/AddTask';
import UpdateTask from './components/task/UpdateTask';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

  render(){
    return(
      <Provider store={store}>

      <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={AgileBoard}/>
        <Route exact path="/addTask" component={AddTask}/>
        <Route exact path="/updateTask" component={UpdateTask}/>
      </div>
      </Router>

      </Provider>
    )
  }

};

export default App;
