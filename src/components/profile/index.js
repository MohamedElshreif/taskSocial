import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { imageProfile } from '../../store/actions';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles({
  root: {
    marginTop: 55,
    position: 'relative',
    paddingTop: 65,
    paddingBottom: 10,
    marginBottom: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: 'none',
  },
  imageProfile: {
    width: '110px',
    height: '110px',
    position: 'absolute',
    top: '0',
    transform: 'translate(-50%,-50%)',
    left: '50%',
  },
  btnProfile: {
    textTransform: 'capitalize',
    marginTop: 10,
  },
  upload: { position: 'absolute', top: 4, right: 0 },
  input: {
    display: 'none',
  },
});

export default function Profile() {
  const dispatch = useDispatch();
  const selectImage = useSelector((state) => state.imgProfile);
  const classes = useStyles();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      dispatch(imageProfile(URL.createObjectURL(img)));
      console.log(URL.createObjectURL(img), 'Good');
    }
  };
  return (
    <Paper className={classes.root}>
      <div className={classes.imageProfile}>
        <Avatar
          alt='Remy Sharp'
          src={selectImage}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-photo'
        type='file'
        onChange={(event) => onImageChange(event)}
      />
      <label htmlFor='icon-button-photo' className={classes.upload}>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <PhotoCamera className={classes.uploadIcon} />
        </IconButton>
      </label>
      <Typography variant='subtitle1' gutterBottom>
        UserName
      </Typography>
      <Typography variant='caption' display='block'>
        Egypt
      </Typography>
      <Button
        variant='contained'
        size='small'
        color='primary'
        className={classes.btnProfile}
      >
        View Profile
      </Button>
    </Paper>
  );
}
