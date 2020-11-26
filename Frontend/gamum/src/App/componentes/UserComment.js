import React from 'react';
import { Button, Comment } from '../../../node_modules/semantic-ui-react'

const UserComment = (props) => {
  return (
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>{props.author}</Comment.Author>
        <Comment.Metadata>
          <div>{props.date}</div>
        </Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>);
}
export default UserComment;