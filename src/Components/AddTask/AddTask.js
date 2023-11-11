import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../REDUX/Actions/listTask";
import { Button, Form } from "react-bootstrap";
import "./AddTask.css";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ id: Math.random(), text, isDone: false }));
      setText("");
    } else {
      alert("can not add an empty text !");
    }
  };
  return (
    <Form onSubmit={handleAdd} className="add-task-container">
      <Form.Control
        className="input-task"
        type="text"
        placeholder="Enter Task Title..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        
      />
      <Button className="adding" variant="success" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
};

export default AddTask;
