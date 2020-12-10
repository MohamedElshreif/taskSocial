import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Post({ post }) {
  const classes = useStyles();
  const avatar = useSelector((state) => state.imgProfile);
  const { id, text, image, video } = post;

  return (
    <Card className={classes.root} id={id}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            alt='Remy Sharp'
            src={avatar}
            className={classes.avatar}
          />
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='UserName Shared Chorizo Post'
      />
      <CardContent>
        {text ? (
          <Typography variant='body2' color='textSecondary' component='p'>
            {text}
          </Typography>
        ) : null}
      </CardContent>
      {image ? <CardMedia className={classes.media} image={image} /> : null}
      {video ? (
        <video width='100%' height='100%' controls>
          <source src={video} type='video/mp4' />
          <source src={video} type='video/ogg' />
        </video>
      ) : null}

      <CardActions disableSpacing style={{ justifyContent: 'space-around' }}>
        <IconButton aria-label='add to like' style={{ color: 'dodgerblue' }}>
          <ThumbUpAltIcon />
          <Typography className={classes.nameAction}>like</Typography>
        </IconButton>
        <IconButton aria-label='add to comment' style={{ color: 'dodgerblue' }}>
          <CommentIcon />
          <Typography className={classes.nameAction}>comment</Typography>
        </IconButton>
        <IconButton aria-label='share' style={{ color: 'dodgerblue' }}>
          <ShareIcon />
          <Typography className={classes.nameAction}>share</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
