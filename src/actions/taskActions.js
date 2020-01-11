import axios from 'axios';
import {GET_ERRORS, GET_TASKS} from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
    
    try{
        await axios.post("http://localhost:8080/todo/board", project_task)
        history.push("/");
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    }
    catch (error)
    {
       dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })  
    }
}

export const getBacklog = () => async dispatch => {
    
    const resp = await axios.get("http://localhost:8080/todo/board/all");

        dispatch({
            type: GET_TASKS,
            payload: resp.data
        })

}