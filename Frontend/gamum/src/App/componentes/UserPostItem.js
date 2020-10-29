import React from 'react';
import PostItem from '../componentes/PostItem'
import DeletePostButton from '../componentes/DeletePostButton'
import EditPostModal from '../componentes/EditPostModal';

const UserPostItem = (props) => {
    return (
        <div>
            <PostItem 
                short 
                history={props.history}
                {...props} {...props.post}  />
            <DeletePostButton 
                id={props._id} 
                history={props.history} 
                deleteCallback={props.deleteCallback} />
            <EditPostModal
                updateCallback={props.updateCallback}
                {...props.post}
                history = {props.post.history} />
        </div>
    )
}

export default UserPostItem;