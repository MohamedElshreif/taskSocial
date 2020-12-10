import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 10,
    marginBottom: 24,
  },
  head: {
    background: '#3f51b5',
    color: '#fff',
    padding: '5px 10px',
    fontSize: 17,
  },
}));

export default function Categories() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography className={classes.head} variant='h6'>
        Tags
      </Typography>
      <ListItem style={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Photos' />
      </ListItem>
      <ListItem style={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Work' />
      </ListItem>
      <ListItem style={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Vacation' />
      </ListItem>
    </List>
  );
}
