import React from 'react'
import PostService from '../services/post-service';
import PostItem from './PostItem';
import Grid from '@material-ui/core/Grid';
class PostList extends React.Component {
    constructor(props){
       super(props);
       this.postService = new PostService(props);
       this.state = { 
           posts: [],
           shoudRenderPostList: true,
           filteredPosts: '',
           searchPosts: ''
        }
    }

    componentDidMount() {
        this.postService.obterPosts()
            .then(response => this.setState({  posts: response.data }));
            this.setState({ searchPosts: this.props.section})
            this.setState({ filteredPosts: localStorage.getItem("section")})
    }

    render(){

        let { posts } = this.state;
        
        return (
            <Grid container spacing={4}>
                {
                    
                    this.state.filteredPosts !== '' ? 
                    posts && posts.filter((post) => post.fontUrl === this.state.filteredPosts).map((post) => <PostItem key={post.id} {...post} />) 
                    : this.props.section !== '' ? 
                    posts && posts.filter(post => post.title.toString().includes(this.props.section)).map((post) => <PostItem key={post.id} {...post} />)
                    :
                    posts && posts.map((post) => <PostItem key={post.id} {...post} />) 
                    
                }
            </Grid>
        );
    }
}

export default PostList;