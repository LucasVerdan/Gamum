import HttpService from './http';

export default class PostService {
    constructor(props){
        this.service = new HttpService(props);
    }

    createPost(title, imgUrl, fontUrl, content){
        this.service.post('/posts/create-post', {title: title, imgUrl: imgUrl, fontUrl: fontUrl, content: content})
    };

    getPosts() {
        this.service.get('/posts') 
    }

    getUserPosts(id) {
        this.service.get(`/posts/:${id}`) 
    }

}