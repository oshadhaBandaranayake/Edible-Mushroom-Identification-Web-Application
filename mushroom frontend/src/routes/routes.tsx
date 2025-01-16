import { createBrowserRouter } from "react-router-dom";
import Classification from "../components/Classification/Classification";
import Edible from "../components/Edible/Edible";
import Growth from "../components/Growth/Growth";
import Identification from "../components/Identification/Identification";
import Mushrooms from "../components/Mushrooms/Mushrooms";
import Receipes from "../components/Receipes/Receipes";
import Root from "../components/Root/Root";
import { ROUTES } from "../constants/url";

const router = createBrowserRouter([
  {
    path: ROUTES.Home,
    element: <Root />,
    children: [
      {
        path: ROUTES.Growth,
        element: <Growth />,
      },
      {
        path: ROUTES.Classification,
        element: <Classification />,
      },
      {
        path: ROUTES.Edible,
        element: <Edible />,
      },
      {
        path: ROUTES.Mushrooms,
        element: <Mushrooms />,
      },
      {
        path: ROUTES.Recipes,
        element: <Receipes />,
      },
      {
        path: ROUTES.Identification,
        element: <Identification />,
      },
    ],
  },
]);

export default router;
