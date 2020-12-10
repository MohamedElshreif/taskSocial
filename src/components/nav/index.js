import Profile from '../profile';
import { makeStyles } from '@material-ui/core/styles';
import Categories from '../categories';
import Tags from '../tags';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
    ['@media (max-width:780px)']: {
      position: 'fixed',
      background: '#fff',
      zIndex: 1,
      left: 0,
    },
  },
}));
export default function SideFixed() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Profile />
      <Categories />
      <Tags />
    </div>
  );
}
