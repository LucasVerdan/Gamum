import React from 'react' 
import Button from '@material-ui/core/Button';

import PostService from '../services/post-service';

const DeletePostButton = (props) => {

    const postService = new PostService(props)
    return(
        <Button size="small" color="primary" onClick={() => {
            postService.deleteUserPost(props.id)
        }}>
           Delete 
        </Button>
    )
}

export default DeletePostButton;