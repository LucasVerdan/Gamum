import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PostService from '../services/post-service';

import CommentList from '../componentes/CommentList';


import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '385px',
    height: '300px'
  },
}));

const PostContent = (props) => {
  const classes = useStyles();
  const postService = new PostService(props);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [fontUrl, setFontUrl] = useState('');
  const [id, setId] = useState('');
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);


  useEffect(() => {
    let postId = props.history && props.history.location && props.history.location.state && props.history.location.state.id && props.history.location.state.id;
    postService.getPost(postId)
      .then(response => {
        let post = response.data;
        setId(post._id);
        setTitle(post.title);
        setContent(post.content);
        setImgUrl(post.imgUrl);
        setFontUrl(post.fontUrl);
      })

      postService.getLikes(postId)
        .then(res => {
          setLike(res.data[0]);
          setDislike(res.data[1]);
        })
  })

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="body2" style={{ cursor: 'pointer' }}>
              Add Category
           </Typography>
            {
              imgUrl && imgUrl !== '' && <img className={classes.img} alt="complex" src={imgUrl} />
            }
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          { id && 
            <div>
              <span>{like}
                <ThumbUpAltIcon 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => postService.like(localStorage.getItem('userId'), id).then(res => { setLike(res.data[0]); setDislike(res.data[1]); })} />
              </span>
              <span style={{padding: '5px'}}>{dislike}
                <ThumbDownIcon 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => postService.dislike(localStorage.getItem('userId'), id).then(res => { setLike(res.data[0]); setDislike(res.data[1]); })} />
              </span>
            </div>
          }
          { id && <CommentList id={id}/>}
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

export default PostContent