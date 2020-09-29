import React from 'react';
import CreatePostModal from '../componentes/CreatePostModal';
import UserPostList from '../componentes/UserPostList'


const UserPosts = (props) => {
    return (
        <div>
           <UserPostList history={props.history}/>
           <CreatePostModal history={props.history}/>
        </div>
    )
}

export default UserPosts;