import { Grid } from "@mui/material";
import Card from "./Card";
import data from "./data";

const Mushrooms = () => {
  return (
    <Grid container>
      {data.map((mushroom) => (
        <Card mushroom={mushroom} key={mushroom.title} />
      ))}
    </Grid>
  );
};

export default Mushrooms;
