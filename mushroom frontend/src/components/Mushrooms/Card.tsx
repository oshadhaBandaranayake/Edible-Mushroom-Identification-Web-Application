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
import { MushroomInfo } from "../../types";
type Props = {
  mushroom: MushroomInfo;
};

const Card = ({ mushroom }: Props) => {
  return (
    <Grid item xs={12} lg={9} key={mushroom.title} mb="2rem">
      <Typography variant="h5" fontWeight="bold" mb="1rem">
        {mushroom.title}
      </Typography>
      <img
        src={mushroom.image}
        width={"100%"}
        style={{
          display: "block",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <Typography textAlign="justify" mt="1rem" color="text.secondary">
        {mushroom.description}
      </Typography>{" "}
      <Typography variant="h6" mt="1rem" fontWeight="bold">
        Recipes
      </Typography>
      <Typography textAlign="justify" mt="1rem" color="text.secondary">
        {mushroom.recipesDescription}
      </Typography>
      <List>
        {mushroom.recipes.map((recipe) => (
          <ListItem key={recipe.title}>
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>{recipe.title}</strong>
                </Typography>
              }
              secondary={recipe.description}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" mt="1rem" fontWeight="bold">
        Importance and Nutritional Value
      </Typography>
      <Typography textAlign="justify" mt="1rem" color="text.secondary">
        {mushroom.nutritionDescription}
      </Typography>
      <List>
        {mushroom.nutritionList.map((nutrition) => (
          <ListItem key={nutrition.title}>
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>{nutrition.title}</strong>
                </Typography>
              }
              secondary={nutrition.description}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Grid>
  );
};

export default Card;
