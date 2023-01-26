// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities
import AboutUs from "./components/utilities/AboutUs";
import ContactUs from "./components/utilities/ContactUs";
import ErrorPage from "./components/utilities/ErrorPage";
import FetchForHomePage from "./components/utilities/FetchForHomepage";
import HomePage from "./components/utilities/HomePage";

// Import Pages
import Bentley from "./components/pages/Vehicles/Bentley"
import BentleyDetail from "./components/pages/Vehicles/BentleyDetail";
import Bugatti from "./components/pages/Vehicles/Bugatti";
import BugattiDetail from "./components/pages/Vehicles/BugattiDetail";
import Financing from "./components/pages/Financing";
import Ferrari from "./components/pages/Vehicles/Ferrari";
import FerrariDetail from "./components/pages/Vehicles/FerrariDetail";
import Koenigsegg from "./components/pages/Vehicles/Koenigsegg";
import KoenigseggDetail from "./components/pages/Vehicles/KoenigseggDetail";
import Lamborghini from "./components/pages/Vehicles/Lamborghini";
import LamborghiniDetail from "./components/pages/Vehicles/LamborghiniDetail";
import Mclaren from "./components/pages/Vehicles/McLaren";
import MclarenDetail from "./components/pages/Vehicles/McLarenDetail";
import NewsAndEvents from "./components/pages/NewsAndEvents";
import Porsche from "./components/pages/Vehicles/Porsche";
import PorscheDetail from "./components/pages/Vehicles/PorscheDetail";
import RollsRoyce from "./components/pages/Vehicles/RollsRoyce";
import RollsRoyceDetail from "./components/pages/Vehicles/RollsRoyceDetail";
import ServiceAndParts from "./components/pages/ServiceAndParts";
import Vehicles from "./components/pages/Vehicles";


// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <FetchForHomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "inventory/bentley",
                element: <Bentley />
            },
            {
                path: "inventory/bentley/:carId",
                element: <BentleyDetail />
            },
            {
                path: "inventory/bugatti",
                element: <Bugatti />
            },
            {
                path: "inventory/bugatti/:carId",
                element: <BugattiDetail />
            },
            {
                path: "inventory/ferrari",
                element: <Ferrari />
            },
            {
                path: "inventory/ferrari/:carId",
                element: <FerrariDetail />
            },
            {
                path: "financing",
                element: <Financing />
            },
            {
                path: "vehicles/koenigsegg",
                element: <Koenigsegg />
            },
            {
                path: "/vehicles/koenigsegg/:carId",
                element: <KoenigseggDetail />
            },
            {
                path: "/vehicles/lamborghini",
                element: <Lamborghini />
            },
            {
                path: "/vehicles/lamborghini/:carId",
                element: <LamborghiniDetail />
            },
            {
                path: "/vehicles/mclaren",
                element: <Mclaren />
            },
            {
                path: "/vehicles/mclaren/:carId",
                element: <MclarenDetail />
            },
            {
                path: "/newsandevents",
                element: <NewsAndEvents />
            },
            {
                path: "/vehicles/porsche",
                element: <Porsche />
            },
            {
                path: "/vehicles/porsche/:carId",
                element: <PorscheDetail />
            },
            {
                path: "/vehicles/rollsroyce",
                element: <RollsRoyce />
            },
            {
                path: "/vehicles/rollsroyce/:carId",
                element: <RollsRoyceDetail />
            },
            {
                path: "/service",
                element: <ServiceAndParts />
            },
            {
                path: "vehicles",
                element: <Vehicles />
            },
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)

// createRoot(document.getElementById("apps")).render(
//     <RouterProvider router={router} />
//   ); // update