import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Home from "../Home/Home";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <AppBar />
      <Box
        sx={{
          px: {
            lg: "10rem",
            md: "2rem",
            xs: "1rem",
          },
          mt: {
            lg: "15vh",
            xs: "10vh",
          },
        }}
      >
        {location.pathname === "/" && <Home />}
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
