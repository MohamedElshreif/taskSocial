import SideFixed from '../components/nav';
import Hidden from '@material-ui/core/Hidden';

import Advertising from '../components/advertising';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Social from './social';

export default function Main() {
  return (
    <Container fixed>
      <Grid container spacing={8}>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={3}>
            <SideFixed />
          </Grid>
        </Hidden>
        <Grid item xs={12} lg={6}>
          <Social />
        </Grid>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={3}>
            <Advertising />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
