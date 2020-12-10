import { useState, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/actions';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useStyles } from './style';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const classes = useStyles();
  const inputImage = useRef(null);
  const inputVideo = useRef(null);
  const [data, setData] = useState({ image: '', video: '', text: '' });
  const dispatch = useDispatch();
  const onImageChange = (event) => {
    if (event.target.type === 'file') {
      let img = event.target.files[0];
      setData({ ...data, [event.target.name]: URL.createObjectURL(img) });
    }
    if (event.target.name == 'text') {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitData = () => {
    dispatch(addPost({ id: uuidv4(), ...data }));
    setData({ image: '', video: '', text: '' });
    inputImage.current.value = '';
    inputVideo.current.value = '';
  };
  return (
    <Paper className={classes.root}>
      <form>
        <TextareaAutosize
          aria-label='minimum height'
          rowsMin={8}
          rowsMax={8}
          name='text'
          className={classes.field}
          aria-label='maximum height'
          placeholder='what`s on your mind ?'
          value={data.text}
          onChange={(event) => onImageChange(event)}
        />
        <div className={classes.btns}>
          <div>
            <input
              accept='image/*'
              className={classes.input}
              id='icon-photoPost'
              type='file'
              name='image'
              onChange={(event) => onImageChange(event)}
              ref={inputImage}
            />
            <label htmlFor='icon-photoPost'>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
                className={classes.upload}
              >
                <PhotoCamera
                  style={{ color: data.image ? 'dodgerblue' : '#444' }}
                  className={classes.uploadIcon}
                />
                Photo/gif
              </IconButton>
            </label>
            <input
              accept='video/*'
              className={classes.input}
              id='icon-videoPost'
              type='file'
              name='video'
              onChange={(event) => onImageChange(event)}
              ref={inputVideo}
            />
            <label htmlFor='icon-videoPost'>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
                className={classes.upload}
              >
                <PhotoCamera
                  style={{ color: data.video ? 'dodgerblue' : '#444' }}
                  className={classes.uploadIcon}
                />
                video
              </IconButton>
            </label>
          </div>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className={classes.btn}
            onClick={() => submitData()}
            disabled={
              data.video !== '' || data.text !== '' || data.image !== ''
                ? false
                : true
            }
          >
            Post
          </Button>
        </div>
      </form>
    </Paper>
  );
}
