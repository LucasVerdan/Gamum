import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


import PostFormModal from './PostFormModal';
import PostService from '../services/post-service';


const EditPostModal = (props) => {

    let postService = new PostService(props);
    const [isOpen, setOpen] = useState(false);

    const onSubmit = (title, imgUrl, fontUrl, content, id) => {
        postService.updatePost(title,imgUrl,fontUrl,content,id)
            .then(response => props.updateCallback(response.data))
        handleModal();
    }

    const handleModal = () => {
        setOpen(!isOpen)
    }

        return (
            <div>
               <PostFormModal
                  isOpen={isOpen}
                  handleModal = {handleModal}
                  onSubmit = {onSubmit}
                  id = {props._id}
                  title = {props.title}
                  content = {props.content}
                  fontUrl = {props.fontUrl}
                  imgUrl = {props.imgUrl}

               />
               <Button size="small" color="primary" onClick={handleModal}>
                  Edit 
               </Button>
            </div>
        )
    
}
export default EditPostModal;