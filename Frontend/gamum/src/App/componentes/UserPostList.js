import React from 'react'
import PostService from '../services/post-service';
import UserPostItem from './UserPostItem';
import Grid from '@material-ui/core/Grid';
import CreatePostModal from '../componentes/CreatePostModal';


class UsersPostList extends React.Component {
    constructor(props){
        super(props);

        this.postService = new PostService(props)
        this.state = { posts: [] }
    }

    componentDidMount() {
        this.postService.obterPosts()
            .then(response => this.setState({  posts: response.data }));
    }

    createPostCallback = (post) => {
        this.setState(state => {
            return {
                posts: state.posts.concat(post)
            }
        })
    }

    deletePostCallback = (postId) => {
        this.setState(state => {
            return {
                posts: state.posts.filter(e => e._id !== postId)
            }
        })
    }

    updateCallback = (post) => {
        this.setState(state => {
            return {
                posts: state.posts.map(p => p._id === post._id ? {...post} : p)
            }
        }) 
    }

    render(){
        return (
            <div>
                <h1>My Posts</h1>
                <Grid container spacing={4}>
                    {console.log(this.state.posts)}
                {
                    this.state.posts &&  this.state.posts.map((post) => <UserPostItem updateCallback={this.updateCallback.bind(this)} deleteCallback={this.deletePostCallback.bind(this)} key={post.id} post={post} history={this.props.history} />)
                }
                </Grid>
                <CreatePostModal 
                    history={this.props.history}
                    createCallback={this.createPostCallback.bind(this)} />
            </div>
        );
    }
}

export default UsersPostList;