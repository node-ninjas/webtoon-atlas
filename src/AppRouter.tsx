import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import { Page404 } from "./pages/Page404";
import { PageHome } from "./pages/PageHome";
import { PageInfo } from "./pages/PageInfo";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Page404 />,
        element: <App />,
        children: [
            {
                path: "/",
                element: <PageHome />
            },
            {
                path: "/info",
                element: <PageInfo />
            }
        ]
    }
])

export default router;