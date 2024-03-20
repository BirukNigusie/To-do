/* eslint-disable react/prop-types */
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from '@mui/material/colors';
function Todo(props) {
  const handleDelete = () => {
    db.collection('todos').doc(props.text.id).delete();
  };
  return (
    <div>
      <div className="todo">    
      <List >
        <ListItem>
          <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.text.text} secondary="Todo Deadline ⏰" />
        </ListItem>
        {console.log("hello")}
        <Button onClick={handleDelete}><DeleteIcon/></Button>
      </List>
      </div>
    </div>

  );
}

export default Todo;
