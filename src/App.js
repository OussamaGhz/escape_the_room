import "./App.css";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AgendaPage from "./Pages/AgendaPage";
import ChallengesPage from "./Pages/ChallengesPage";
import RootLayout from "./Pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "agenda", element: <AgendaPage /> },
        { path: "challenges", element: <ChallengesPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
