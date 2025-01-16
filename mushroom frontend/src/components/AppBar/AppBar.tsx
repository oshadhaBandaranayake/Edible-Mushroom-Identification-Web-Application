import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/url";

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setIsDrawerOpen((p) => !p);

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.09)",
        backdropFilter: "blur(4.5px)",
        height: "8vh",
        borderBottom: "1px solid #E0E0E0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: {
          lg: "10rem",
          md: "2rem",
          xs: "1rem",
        },
      }}
    >
      <IconButton
        sx={{ display: { xs: "", lg: "none" } }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Link
        to={ROUTES.Home}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color="black">
          🍄 Mushroom Lovers
        </Typography>
      </Link>

      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          gap: "1rem",
        }}
      >
        {Object.entries(ROUTES)
          .slice(1, 7)
          .map(([name, path]) => (
            <Link
              to={path}
              key={path}
              style={{
                textDecoration: "none",
                color: location.pathname.includes(path) ? "black" : "#868E9A",
              }}
            >
              {name}
            </Link>
          ))}
      </Box>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer} anchor="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75vw",
            alignItems: "center",
            gap: "1rem",
            pt: "7vh",
          }}
        >
          {Object.entries(ROUTES).map(([name, path]) => (
            <Link
              onClick={toggleDrawer}
              to={path}
              key={path}
              style={{
                textDecoration: "none",
                color: location.pathname.includes(path) ? "black" : "#868E9A",
                fontWeight: location.pathname.includes(path) ? "bold" : "",
              }}
            >
              {name}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppBar;
