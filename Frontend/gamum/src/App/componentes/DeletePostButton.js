import React from 'react' 
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


import PostService from '../services/post-service';

const DeletePostButton = (props) => {

    const postService = new PostService(props)
    return(
        <Button  variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => {
            postService.deleteUserPost(props.id)
        }}>
           Delete 
        </Button>
    )
}

export default DeletePostButton;