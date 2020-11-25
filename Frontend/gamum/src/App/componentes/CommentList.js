import React, { useState, useEffect } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import UserComment from './UserComment';
import CommentService from '../services/comment-service';


const CommentList = (props, state) => {

  const commentService = new CommentService(props);

  const [comments, setComments] = useState([]);
  const [commentReply, setCommentReply] = useState('');

  useEffect(() => {
    commentService.getComments(props.id)
      .then(res => setComments([...comments, ...res.data]));
  }, []);

  function handleChange(text) {
    this.setCommentReply(text);
  }

  function onSubmit() {

    commentService.createComment(commentReply, props.id, localStorage.getItem('userId'))
      .then(res => setComments([...comments, ...res.data]));
  }
  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
    </Header>
      {
        comments && comments.map(comment => <UserComment author={comment.author} date={comment.date} content={comment.content} />)
      }
      <Form reply onSubmit={onSubmit}>
        <Form.TextArea onChange={(e) => setCommentReply(e.target.value)} value={commentReply} />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>);
}


export default CommentList