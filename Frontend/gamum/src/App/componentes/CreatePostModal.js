import React from 'react';
import PostFormModal from './PostFormModal';

import PostService from '../services/post-service';


export default class CreatePostModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.postService = new PostService(props);
    }

    onSubmit = (title, imgUrl, fontUrl, content) => {
        this.postService.createPost(title,imgUrl,fontUrl,content)
        this.handleModal();
    }

    handleModal = () => {
        this.setState((prev) => ({
            isOpen: !prev.isOpen
        }))
    }

    render() {

        return (
            <div>
               <PostFormModal
                  isOpen={this.state.isOpen}
                  handleModal = {this.handleModal}
                  onSubmit = {this.onSubmit}
               />
               <button
                  onClick={this.handleModal}
               >
                Create Post 
               </button>
            </div>
        )
    }
}