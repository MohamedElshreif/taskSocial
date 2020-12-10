import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: '10px',
    boxShadow: 'none',
    textTransform: 'capitalize',
  },
  tag: {
    color: '#fff',
    background: '#3f51b5',
    fontWeight: 500,
    margin: '0 4px',
    padding: '5px 7px',
  },
  head: {
    background: '#3f51b5',
    color: '#fff',
    padding: '5px 10px',
    marginBottom: 16,
    fontSize: 17,
  },
});

export default function Tags() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.head} variant='h6'>
        Categories
      </Typography>
      <Typography className={classes.tag} variant='caption'>
        UserName
      </Typography>
      <Typography className={classes.tag} variant='caption'>
        Egypt
      </Typography>
      <Typography className={classes.tag} variant='caption'>
        math
      </Typography>
      <Typography className={classes.tag} variant='caption'>
        music
      </Typography>
    </Paper>
  );
}
