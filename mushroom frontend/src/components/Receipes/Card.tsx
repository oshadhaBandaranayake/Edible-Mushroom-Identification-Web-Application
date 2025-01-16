import { Done } from "@mui/icons-material";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Recepie } from "../../types";

type Props = {
  recipe: Recepie;
};

const Card = ({ recipe }: Props) => {
  return (
    <Grid item xs={12} lg={9} key={recipe.title} mb="2rem"> 
      <Typography variant="h5" fontWeight="bold" mb="1rem">
        {recipe.title}
      </Typography>
      <img
        src={recipe.image}
        width={"100%"}
        style={{
          display: "block",
          objectFit: "cover",
          borderRadius: "5px",
          height: "50vh",
        }}
      />
      <Typography textAlign="justify" mt="1rem" color="text.secondary">
        {recipe.description}
      </Typography>{" "}
      <Typography variant="h6" mt="1rem" fontWeight="bold">
        Ingredients
      </Typography>
      <List>
        {recipe.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText secondary={ingredient} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" mt="1rem" fontWeight="bold">
        Directions
      </Typography>
      <List>
        {recipe.steps.map((step) => (
          <ListItem key={step}>
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText secondary={step} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Grid>
  );
};

export default Card;
