import React, {useState} from 'react'
import Header from '../componentes/Header'
import PostContent from '../componentes/PostContent'
import PostService from '../services/post-service';

const sections = [
    { title: 'Mobile', url: '#' },
    { title: 'Console', url: '#' },
    { title: 'PC', url: '#' },
    { title: 'Virtual Reality', url: '#' },

  ];

const PostPage = (props) => {
    const postService = new PostService(props)
  //const post = postService.getPost(props.match.params.id)
  const [sectionPost, setSection ] = useState('');
  const getCurrentSection = (section) => {
    setSection(section);
  }
    return(
        <div>
           <Header title="GAMUM" sections={sections} getCurrentSection={(data) => getCurrentSection(data)}/>
           <PostContent history={props.history} />
         </div>
    );
}

export default PostPage;