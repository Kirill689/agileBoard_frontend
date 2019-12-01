import React, { Component } from 'react'
import{ Link } from "react-router-dom";

export default class AddTask extends Component {

    constructor(){

        super();

        this.state = {
            summary:'',
            acceptanceCriteria:'',
            status:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };


    onChange(e){
        this.setState({ [e.target.name] : e.target.value}); 
    };

    onSubmit(e){
        e.preventDefault();
        const newTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        }

        console.log(newTask);
        
 
    }


    render() {
        return (
            <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add /Update Project Task</h4>

                    <form onSubmit={this.onSubmit} >

                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="summary" 
                            value={this.state.taskSummary} 
                            onChange={this.onChange} 
                            placeholder="Task Summary"
                            />
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg"  
                            value={this.state.taskAcceptance} 
                            onChange={this.onChange} 
                            name="acceptanceCriteria"
                            placeholder="Acceptance Criteria"></textarea>
                        </div>

                        <div className="form-group">
                            <select 
                            className="form-control form-control-lg" 
                            name="status" 
                            value={this.state.taskStatus}
                            onChange={this.onChange}>
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4"/>

                    </form> 
                </div>
            </div>
        </div>
    </div>
        )
    }
}
