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

        const {tasks} = this.props.tasks;

        let boardContent;
        let todoTasks = [];
        let inProgressTasks = [];
        let doneTasks = [];

        const tasksSorter = tasks => {
            if(tasks.length < 1){
                return (
                    <div className="alert alert-info text-center" role="alert">
                    No taks available!
                    </div>
                )
            }
            else{
                const tasksToDisplay = tasks.map(item => (
                    <TaskItem key={item.taskId} task={item}></TaskItem>
                ));

                for(let i = 0; i < tasksToDisplay.length; i++){
                    
                    if(tasksToDisplay[i].props.task.status==="TO_DO"){
                        todoTasks.push(tasksToDisplay[i]);
                        console.log(todoTasks)
                    }

                    if(tasksToDisplay[i].props.task.status==="DONE"){
                        doneTasks.push(tasksToDisplay[i]);
                        console.log(doneTasks)
                    }

                    if(tasksToDisplay[i].props.task.status==="IN_PROGRESS"){
                        inProgressTasks.push(tasksToDisplay[i]);
                        console.log(inProgressTasks)
                    }
                }
            }
        }

        tasksSorter(tasks);

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
                      
                        {todoTasks}
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        
                        {inProgressTasks}
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>

                        {doneTasks}                     
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