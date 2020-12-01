import React from 'react';
import { Comment } from 'antd'
import CommentService from '../services/comment-service';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const UserComment = (props) => {
    
  let commentService = new CommentService(props);

  function handleClick() {
    commentService.deleteComment(props.id)
      .finally(f => props.deleteCallback());
  }

    return (
      <div 
         style={{ display: 'flex', width: '60%', tableLayout: 'fixed'}}
        >
        <Comment {...props} style={{ display: 'inline-block', wordBreak: 'break-all'}}/>
        { props.user == props.userId && <DeleteIcon style={{ display: 'inline-block', marginTop: '35px', cursor: 'pointer'}} onClick={handleClick} /> }
      </div>
    );
}

export default UserComment;