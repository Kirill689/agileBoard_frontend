import React, { Component } from 'react'
import{ Link } from "react-router-dom";
import TaskItem from './task/TaskItem';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getBacklog} from "../actions/taskActions";

class AgileBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

    render() {
        return (

            <div className="container">
            <Link to="/addTask" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
            <br />
            <hr />

            <div className="container">
                <div className="row">


                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
    
                        <TaskItem></TaskItem>
                      
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        
                        <TaskItem></TaskItem>

                    </div>


                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                       
                        <TaskItem></TaskItem>
                        
                    </div>


                </div>
            </div>
      
        </div>
        )
    }
}

AgileBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
}

const stateToProps = state => ({
    tasks: state.tasks
})

export default connect (stateToProps, {getBacklog}) (AgileBoard);