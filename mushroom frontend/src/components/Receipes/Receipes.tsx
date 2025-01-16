import { Grid } from "@mui/material";
import Card from "./Card";
import recepies from "./data";

const Receipes = () => {
  return (
    <Grid container>
      {recepies.map((recepie) => (
        <Card recipe={recepie} key={recepie.title} />
      ))}
    </Grid>
  );
};

export default Receipes;
