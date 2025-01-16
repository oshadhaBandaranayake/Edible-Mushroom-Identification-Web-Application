import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image2 from "../../assets/classification.jpg";
import image3 from "../../assets/edible.jfif";
import image from "../../assets/growth.jpg";
import image4 from "../../assets/identification.jpg";
import { ROUTES } from "../../constants/url";

const data = [
  { image: image2, name: "Classification", path: ROUTES.Classification },
  { image: image3, name: "Edible", path: ROUTES.Edible },
  { image: image4, name: "Identification", path: ROUTES.Identification },
  { image: image, name: "Grwoth", path: ROUTES.Growth },
];

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb="1rem">
        Welcome to our home page,
      </Typography>
      <Typography mb="4rem" textAlign="justify" color="text.secondary">
        where nature's bounty unfolds at your fingertips. Our components are
        your key to unlocking the mushroom kingdom's secrets. From identifying
        the finest edible mushrooms to classifying various fungal species and
        understanding their growth stages, we offer you a captivating journey
        through the world of mycology. Join us in this fungal adventure, and let
        your curiosity sprout like a mushroom in the forest – rich, diverse, and
        full of delightful surprises.
      </Typography>
      <Grid container gap={2} justifyContent="space-between">
        {data.map((path) => (
          <Grid
            item
            key={path.name}
            lg={2.5}
            xs={12}
            mb={{ xs: "2rem" }}
            height="30vh"
            sx={{ border: "1px solid #E0E0E0", borderRadius: "5px" }}
          >
            <Link to={path.path} style={{ textDecoration: "none" }}>
              <img
                src={path.image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
            <Typography variant="h6" textAlign="center" fontWeight="bold">
              {path.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
