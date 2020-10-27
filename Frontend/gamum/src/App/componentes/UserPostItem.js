import React from 'react';
import PostItem from '../componentes/PostItem'


const UserPostItem = (props) => {
    return (
        <PostItem user {...props.post} {...props} history={props.history}/>
    )
}

export default UserPostItem;