import React, { Component } from 'react'
import{ Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addProjectTask} from "../../actions/taskActions";
import classnames from "classnames"; 

class AddTask extends Component {

    constructor(){

        super();

        //The fields names need to be same as blocks names
        this.state = {
            summary:'', 
            acceptance:'',
            status:'',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    componentWillReceiveProps(nextPr){
        if(nextPr.errors){
            this.setState({errors:nextPr.errors});
        }
    }

    onChange(e){
        //             nblock name/field: value (of this.block);
        this.setState({ [e.target.name] : e.target.value}); 
    };

    onSubmit(e){
        e.preventDefault();
        const newTask = {
            summary: this.state.summary,
            acceptance: this.state.acceptance,
            status: this.state.status
        }
        
       this.props.addProjectTask(newTask, this.props.history); 
    }


    render() {

        const { errors } = this.state;

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
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.summary
                            })}
                            name="summary" 
                            value={this.state.taskSummary} 
                            onChange={this.onChange} 
                            placeholder="Task Summary"
                            />
                            
                            {
                                errors.summary && (
                                    <div className="invalid-feedback">{errors.summary}</div>
                                )
                            }

                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg"  
                            value={this.state.acceptance} 
                            onChange={this.onChange} 
                            name="acceptance"
                            placeholder="Acceptance Criteria"></textarea>
                            <p>{errors.acceptance}</p>
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

AddTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired 
}

const stateToProps = state => ({
    errors: state.errors
});

export default connect(stateToProps, {addProjectTask}) (AddTask);
