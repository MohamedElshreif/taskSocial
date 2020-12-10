import AdvertisingBox from '../advertisingBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 25,
  },
}));

export default function Advertising({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AdvertisingBox image='Advertising-1.jpg' />
      <AdvertisingBox image='Advertising-2.png' />
      <AdvertisingBox image='Advertising-3.jpg' />
    </div>
  );
}
