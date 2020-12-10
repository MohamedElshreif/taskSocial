import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

export default function AdvertisingBox({ image }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <CardMedia
        className={classes.media}
        image={`/images/${image}`}
        title='Paella dish'
      />
    </Paper>
  );
}
