import Posts from '../components/posts';
import Form from '../components/form';
import Grid from '@material-ui/core/Grid';

export default function Social() {
  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <Form />
      </Grid>
      <Grid item xs={12}>
        <Posts />
      </Grid>
    </Grid>
  );
}
