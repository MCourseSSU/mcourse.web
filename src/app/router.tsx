import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/ui/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);