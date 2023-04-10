import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import MyProjects from "./pages/MyProjects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ComingSoon from "./pages/ComingSoon";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/my-projects",
                element: <MyProjects />,
            },

            {
                path: "/my-projects/:id",
                element: <Project />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <Home />,
            },
            {
                path: "/coming-soon",
                element: <ComingSoon />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;
