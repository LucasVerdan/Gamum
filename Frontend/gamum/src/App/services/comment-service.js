import HttpService from './http';

export default class CommentService {
    constructor(props){
        this.service = new HttpService(props);
    }

    getComments(postId){
        return this.service.get(`/getComments/${postId}`);
    }

    createComment(content, postId, userId) { 
        return this.service.post(`/createComment`, { content: content, postId: postId, userId: userId})
    }

}