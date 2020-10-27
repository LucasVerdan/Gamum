import React from 'react';
import Button from '@material-ui/core/Button';


import PostFormModal from './PostFormModal';
import PostService from '../services/post-service';


export default class EditPostModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.postService = new PostService(props);
    }

    onSubmit = (title, imgUrl, fontUrl, content, id) => {
        this.postService.updatePost(title,imgUrl,fontUrl,content,id)
            .then(response => this.props.updateCallback(response.data))
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
                  id = {this.props.id}
                  title = {this.props.title}
                  content = {this.props.content}
                  fontUrl = {this.props.fontUrl}
                  imgUrl = {this.props.imgUrl}

               />
               <Button size="small" color="primary" onClick={this.handleModal}>
                  Edit 
               </Button>
            </div>
        )
    }
}