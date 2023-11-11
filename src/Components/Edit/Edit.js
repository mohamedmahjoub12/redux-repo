import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../REDUX/Actions/listTask';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        dispatch(editTask(task.id, newTask))
        handleClose()
    }
  return (
    <>
    <Button variant='info' onClick={handleShow}>
        EDIT
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Change the Task</Modal.Title>
        </Modal.Header>
        <ModalBody>
            <input value={newTask} 
            onChange={(e)=> setNewTask(e.target.value)}/>
        </ModalBody>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button variant='primary' onClick={handleEdit}>Save Changes</Button>
        </Modal.Footer>
    </Modal>
    </>

  );
}

export default Edit