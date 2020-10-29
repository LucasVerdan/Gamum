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
           filteredPosts: ''
        }
    }

    componentDidMount() {
        this.postService.obterPosts()
            .then(response => this.setState({  posts: response.data }));
            this.setState({ filteredPosts: this.props.section})
    }

    render(){

        let { posts } = this.state;
        console.log(this.state);
        console.log(this.props.section)
        return (
            <Grid container spacing={4}>
                {
                    
                    this.props.section === '' ? 
                    posts && posts.map((post) => <PostItem key={post.id} {...post} />)
                    :
                    posts && posts.filter(post => post.title.includes(this.props.section)).map((post) => <PostItem key={post.id} {...post} />)
                }
            </Grid>
        );
    }

}

export default PostList;