import Post from '../post';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

export default function Posts() {
  const selectPosts = useSelector((state) => state.posts);
  const posts = [...selectPosts];
  return (
    <Grid container justify='center'>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <Grid key={post.id} item xs={12}>
            <Post post={post} />
          </Grid>
        ))
      ) : (
        <Typography variant='h4' color='textSecondary'>
          There are no posts
        </Typography>
      )}
    </Grid>
  );
}
