import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import DeletePostButton from './DeletePostButton'



const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});


const PostItem = (props) => {

    const classes = useStyles();

    return (
     <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/posts/${props.id}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                uma data
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {props.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
              
              

          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={props.imgUrl}  />
          </Hidden>
        
        </Card>
      </CardActionArea>
      { props.user && <CardActions>
        <DeletePostButton id={props.id} history={props.history}/>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> }
    </Grid>
    )
}



export default PostItem;