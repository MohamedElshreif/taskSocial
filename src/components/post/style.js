import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginBottom: 20,
  },
  media: {
    height: 0,
    margin: '10px 0',
    paddingTop: '56.25%', // 16:9
  },
  nameAction: { fontSize: 14, marginLeft: 8, textTransform: 'capitalize' },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
