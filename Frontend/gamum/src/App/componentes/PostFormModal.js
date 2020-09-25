import React from 'react';
import Modal from 'react-modal'




export default class PostFromModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: props.title ? props.title : '',
            imgUrl: props.imgUrl ? props.imgUrl : '',
            fontUrl: props.fontUrl ? props.fontUrl : '',
            content: props.content ? props.content : '',
            error: ''
        }

    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }));
    }

    onImgUrlChange = (e) => {
        const imgUrl = e.target.value
        this.setState(() => ({ imgUrl }))
    }

    onFontUrlChange = (e) => {
        const fontUrl = e.target.value
        this.setState(() => ({ fontUrl }))
    }

    onContentChange = (e) => {
        const content = e.target.value
        this.setState(() => ({ content }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        let { title, imgUrl, fontUrl, content} = this.state;
        if(title && imgUrl && fontUrl && content) {
            this.props.onSubmit(title, imgUrl, fontUrl, content)
        } else {
            this.setState(() => ({error: 'Por favor preencha todos os campos'}))
        }
    }

    resetState = () => {
        this.setState(() => ({
            title:  '',
            imgUrl: '',
            fontUrl: '',
            content: '',
        }))
    }
    
    render () {
        return (
            <Modal
              isOpen={this.props.isOpen}
              onRequestClose={this.props.handleModal}
              onAfterClose={this.resetState}
              contentLabel= "Selected Option"
              closeTimeoutMS={200}
              ariaHideApp={false}
            >
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.onSubmit}>
                  <input type='text' onChange={this.onTitleChange} placeholder='Digite o título' value={this.state.title}/>
                  <input type='text' onChange={this.onImgUrlChange} placeholder='Digite a url da imagem' value={this.state.imgUrl}/>
                  <input type='text' onChange={this.onFontUrlChange} placeholder='Digite a url da fonte' value={this.state.fontUrl}/>
                  <textarea onChange={this.onContentChange} placeholder='Digite o conteudo da postagem' value = {this.state.content}/>

                  <button>Add Post</button>
               </form>


            </Modal>
        )
    }


}