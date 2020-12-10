import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    padding: 15,
    marginBottom: 30,
    marginTop: 25,
  },
  field: {
    width: '100%',
    border: 'none',
    background: '#f9f8f8',
    resize: 'none',
    borderRadius: 7,
    boxSizing: 'border-box',
    padding: 13,
    textTransform: 'capitalize',
    outline: 'none',
    marginBottom: 9,
    height: 148,
  },
  upload: {
    fontSize: 13,
    padding: 0,
    marginRight: 13,
    fontWeight: 600,
    color: '#444',
  },
  uploadIcon: {
    marginRight: 5,
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    height: 32,
    fontSize: 13,
  },
  input: {
    display: 'none',
  },
}));
