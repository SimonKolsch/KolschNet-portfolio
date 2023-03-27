import { createBrowserRouter } from "react-router-dom";
import { Portfolio, portfolioLoader, Resume, Thatsme } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "",
    loader: portfolioLoader,
    element: <Portfolio />,
    children: [
      {
        path: "",
        element: <>Welcome in Portfolio</>,
      },
      {
        path: "me",
        element: <Thatsme />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);
