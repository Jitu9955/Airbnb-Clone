import { Container, Box, Grid } from "@mui/material";
import { SearchResult } from "../section/Search";
import Filter from "../section/Filter";
const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Box>
          <Grid container>
            <Grid item md={3} xs={12}>
              {/* Filter */}
              <Filter />
            </Grid>
            <Grid item md={9} xs={12}>
              {/* Search Result */}
              <SearchResult />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
