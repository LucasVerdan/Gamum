import React from 'react';
import Button from '@material-ui/core/Button';


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
        let userId = localStorage.getItem('userId');
        if( userId )
            this.postService.createPost(title,imgUrl,fontUrl,content,userId, new Date().toDateString())
                .then(e => this.props.createCallback(e.data));
            this.handleModal();
    }

    handleModal = () => {
        this.setState((prev) => ({
            isOpen: !prev.isOpen
        }))
    }

    render() {

        return (
            <div style={{paddingTop: '25px'}}>
               <PostFormModal
                  isOpen={this.state.isOpen}
                  handleModal = {this.handleModal}
                  onSubmit = {this.onSubmit}
               />
               <Button variant="contained" size="large" color="primary" onClick={this.handleModal}>
                    create post
                </Button>
            </div>
        )
    }
}