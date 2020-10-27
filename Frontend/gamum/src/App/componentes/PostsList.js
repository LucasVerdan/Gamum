import React from 'react'
import PostService from '../services/post-service';
import PostItem from './PostItem';
import Grid from '@material-ui/core/Grid';



class PostList extends React.Component {
    constructor(props){
       super(props);
       this.postService = new PostService(props);
       this.state = { posts: [] }
    }

    componentDidMount() {
        this.postService.obterPosts()
            .then(response => this.setState({  posts: response.data }));
            
    }

    render(){

        let { posts } = this.state;
        
        return (
            <Grid container spacing={4}>
                {
                    posts && posts.map((post) => <PostItem key={post.id} {...post} />)
                }
            </Grid>
        );
    }

}

export default PostList;