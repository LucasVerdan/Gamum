import React from 'react';
import { Button, Comment } from '../../../node_modules/semantic-ui-react'

const UserComment = (props) => {
  return (<div>
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>{props.author}</Comment.Author>
        <Comment.Metadata>
          <div>{new Date() - props.date}PM</div>
        </Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>0<Button>Like</Button></Comment.Action>
          <Comment.Action>0<Button>Dislike</Button></Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <br></br>
    </div>);
}
export default UserComment;