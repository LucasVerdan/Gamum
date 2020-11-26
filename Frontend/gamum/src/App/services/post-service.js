import HttpService from './http';

export default class PostService {
    constructor(props){
        this.service = new HttpService(props);
    }

    createPost(title, imgUrl, fontUrl, content, userId, date){
        return this.service.post('/createPost', {title: title, imgUrl: imgUrl, fontUrl: fontUrl, content: content, userId: userId, date: date})
    };

    getPost(postId){
        return this.service.get(`/getPost/${postId}`)
    }

    // getUserPosts(userId) {
    //     this.service.get(`/posts/my-posts/:${userId}`) 
    // }

    deleteUserPost(postId) {
        return this.service.delete(`/deletePost/${postId}`)
    }

    updatePost(title, imgUrl, fontUrl, content, id){
        return this.service.post(`/updatePost/${id}`, {title: title, imgUrl: imgUrl, fontUrl: fontUrl, content: content})
    }

    obterPosts() {
        return this.service.get('/getPost');
    }

    getUserPosts(userId) {
        return this.service.post('/getUserPosts', {userId: userId})
    }

    like(userId, postId){
        return this.service.post('/like', {userId: userId, postId: postId});
    }

    dislike(userId,postId){
        return this.service.post('/dislike', {userId: userId, postId: postId});
    }

    getLikes(postId) {
        return this.service.get(`/getLikes/${postId}`);
    }
}