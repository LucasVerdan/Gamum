import React from 'react';
import Modal from 'react-modal'
import '../styles/modal.css'

import Button from '@material-ui/core/Button';





export default class PostFromModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.id ? props.id : '',
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
        let { id, title, imgUrl, fontUrl, content} = this.state;
        if(title && imgUrl && fontUrl && content) {
            this.props.onSubmit(title, imgUrl, fontUrl, content, id)
        } else {
            this.setState(() => ({error: 'Por favor preencha todos os campos'}))
        }
    }

    
    render () {
        return (
            <Modal
              isOpen={this.props.isOpen}
              onRequestClose={this.props.handleModal}

              contentLabel= "Selected Option"
              closeTimeoutMS={200}
              ariaHideApp={false}
              className="modal-container"
            >
               {this.state.error && <p className="warning">{this.state.error}</p>}
               <form onSubmit={this.onSubmit}>
                  <h1 className="modal-title">Preencha os fomulários</h1>
                  <input className="input-form" type='text' onChange={this.onTitleChange} placeholder='Digite o título' value={this.state.title}/>
                  <input className="input-form" type='text' onChange={this.onImgUrlChange} placeholder='Digite a url da imagem' value={this.state.imgUrl}/>
                  <input className="input-form" type='text' onChange={this.onFontUrlChange} placeholder='Digite a url da fonte' value={this.state.fontUrl}/>
                  <textarea className="text-area"onChange={this.onContentChange} placeholder='Digite o conteudo da postagem' value = {this.state.content}/>

                  <Button variant="contained" size="large" color="primary">
                    ADD POST
                  </Button>

               </form>


            </Modal>
        )
    }


}