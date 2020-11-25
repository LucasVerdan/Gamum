import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PostService from '../services/post-service';
import CommentsBlock from 'simple-react-comments';
import CommentList from '../componentes/CommentList';

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
              imgUrl && imgUrl != '' && <img className={classes.img} alt="complex" src={imgUrl} />
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
        { id && <CommentList id={id}/>}
      </Paper>
    </div>
  );
}

export default PostContent