import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './DisplayTodo.css';
import { Button } from "@mui/material";

const DisplayTodo = ({
    isOpen,
    formData,
    handleCloseButton,
    handleEditTodo,
    handleRemoveTodo
}) => {
    return (
        <Dialog open={isOpen} onClose={handleCloseButton}>
            <DialogTitle>
                <div className="display-todo-title">Your todo</div>
            </DialogTitle>
            <DialogContent>  
                <div>
                    <h2>{formData.todoName}</h2>
                    <div>{formData.todoNote}</div>
                </div>   
            </DialogContent>
            <DialogActions>
                    <div className="display-buttons-wrapper">
                        <Button color='secondary' onClick={handleRemoveTodo} variant='outlined'>Remove</Button>
                        <div>
                            <Button onClick={handleCloseButton} color="primary">Close</Button>
                            <Button onClick={handleEditTodo} color="primary">Edit</Button>
                        </div>
                    </div>
            </DialogActions>  
        </Dialog>
    )  
}

export default DisplayTodo;
