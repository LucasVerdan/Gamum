import React from 'react';
import CreatePostModal from '../componentes/CreatePostModal';
import UserPostList from '../componentes/UserPostList'


const UserPosts = (props) => {
    return (
        <div>
           <UserPostList />
           <CreatePostModal history={props.history}/>
        </div>
    )
}

export default UserPosts;