import { useDispatch, useSelector } from "react-redux"
import { tododelete, todotoggle } from "../Redux/action";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./module.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const TodoItem = () => {
    const [open, setOpen] = useState(false);
    const [ids,setId] = useState("");
    const [Status,setStatus]  = useState(false);
  const [newstatus , setNewStatus] = useState(false);

    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        const action = tododelete(id);
        dispatch(action);
    }
    const handleToggle = (id) => {
        const action = todotoggle(id);
        dispatch(action);
    }
    const handleEditToggle = () => {
      const id = ids;
        if( Status == newstatus){
        }
        else{
            const action = todotoggle(id);
            dispatch(action)
        }
        setOpen(false)
    }
    const handleNewStatus = () => {
         if(newstatus == true){
           setNewStatus(false);
       }
       else {
           setNewStatus(true);
       }
    }   
    const handleEdit = (id,status) => {
        setOpen(true);
        setId(id,status);
       setStatus(status)
    }
    return(
        <div>
               <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {newstatus ? "true" : "false"}<br /><br />
                      <button onClick={() => handleNewStatus()}>Toggle</button>
                   <button onClick={() => handleEditToggle()}>close</button>
                      </Typography>
                    </Box>
                  </Modal> 

            {todos.map((item) => (
    
                <div key={item.id} className="todoList" >
                   {item.title} - {item.status ? "true" : "false"}
                   <button onClick={() => handleEdit(item.id,item.status)}>Edit
                   </button>
                    <button onClick={() => handleToggle(item.id)}>Toggle</button>
                     <button onClick={ () => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoItem;