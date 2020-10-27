import HttpService from './http';

export default class PostService {
    constructor(props){
        this.service = new HttpService(props);
    }

    createPost(title, imgUrl, fontUrl, content){
        return this.service.post('/createPost', {title: title, imgUrl: imgUrl, fontUrl: fontUrl, content: content})
    };

    getPost(postId){
        this.service.get(`posts/:${postId}`)
    }

    getUserPosts(userId) {
        this.service.get(`/posts/my-posts/:${userId}`) 
    }

    deleteUserPost(postId) {
        this.service.delete(`/posts/delete/:${postId}`)
    }

    updatePost(title, imgUrl, fontUrl, content,id){
        this.service.post(`/posts/update/:${id}`, {title: title, imgUrl: imgUrl, fontUrl: fontUrl, content: content})
    }

    obterPosts() {
        return this.service.get('/getPost');
    }
}