import React from "react";
import "./Task.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../REDUX/Actions/listTask";
import Edit from "../Edit/Edit";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task-container">
      <span className={task.isDone ? "done" : null}>{task.text}</span>
      <Edit task={task} />
      <Button
        variant="danger"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        DELETE
      </Button>
      <Button
        variant="warning"
        onClick={() => dispatch(doneTask(task.id))}
      >
        {task.isDone ? "UnDone" : "Done"}
      </Button>
    </div>
  );
};
 
export default Task