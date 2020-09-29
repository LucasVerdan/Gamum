import React from 'react'
import PostService from '../services/post-service';
import PostItem from './PostItem';


class PostList extends React.Component {
    constructor(props){
       super(props);
       this.postService = new PostService(props)

        

        this.state = {
            posts: 
            [
                {
                    id: 1,
                    title: 'Titulo 1',
                    imgUrl: 'data:image/jpeg;base64,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',
                    fontUrl: 'fsda',
                    description: 'description 1'
                },  {
                    id: 2,
                    title: 'Titulo 2',
                    imgUrl: 'data:image/jpeg;base64,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',
                    fontUrl: 'fsda',
                    description: 'description 2'
                },
        
            ] 
            //         postService.getPosts()
        }
    }


    render(){
    return (
        <div>
            <h1>Posts</h1>
            {
                this.state.posts.map((post) => <PostItem key={post.id} {...post} />)
            }
        </div>
    )
    }

}

export default PostList;