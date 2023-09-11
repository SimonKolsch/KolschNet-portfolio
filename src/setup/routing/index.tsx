import {createBrowserRouter, redirect} from "react-router-dom";
import { Portfolio, portfolioLoader} from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {return redirect("/portfolio");}
  },
  {
    path: "/portfolio",
    loader: portfolioLoader,
    element: <Portfolio />,
  },
]);
