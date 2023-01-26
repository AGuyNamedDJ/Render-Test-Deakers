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
import Bentley from "./components/pages/Bentley"
import BentleyDetail from "./components/pages/BentleyDetail";
import Bugatti from "./components/pages/Bugatti";
import BugattiDetail from "./components/pages/BugattiDetail";
import Financing from "./components/pages/Financing";
import Ferrari from "./components/pages/Ferrari";
import FerrariDetail from "./components/pages/FerrariDetail";
import Koenigsegg from "./components/pages/Koenigsegg";
import KoenigseggDetail from "./components/pages/KoenigseggDetail";
import Lamborghini from "./components/pages/Lamborghini";
import LamborghiniDetail from "./components/pages/LamborghiniDetail";
import Mclaren from "./components/pages/McLaren";
import MclarenDetail from "./components/pages/McLarenDetail";
import NewsAndEvents from "./components/pages/NewsAndEvents";
import Porsche from "./components/pages/Porsche";
import PorscheDetail from "./components/pages/PorscheDetail";
import RollsRoyce from "./components/pages/RollsRoyce";
import RollsRoyceDetail from "./components/pages/RollsRoyceDetail";
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
                path: "inventory/koenigsegg",
                element: <Koenigsegg />
            },
            {
                path: "/inventory/koenigsegg/:carId",
                element: <KoenigseggDetail />
            },
            {
                path: "/inventory/lamborghini",
                element: <Lamborghini />
            },
            {
                path: "/inventory/lamborghini/:carId",
                element: <LamborghiniDetail />
            },
            {
                path: "/inventory/mclaren",
                element: <Mclaren />
            },
            {
                path: "/inventory/mclaren/:carId",
                element: <MclarenDetail />
            },
            {
                path: "/newsandevents",
                element: <NewsAndEvents />
            },
            {
                path: "/inventory/porsche",
                element: <Porsche />
            },
            {
                path: "/inventory/porsche/:carId",
                element: <PorscheDetail />
            },
            {
                path: "/inventory/rollsroyce",
                element: <RollsRoyce />
            },
            {
                path: "/inventory/rollsroyce/:carId",
                element: <RollsRoyceDetail />
            },
            {
                path: "/service",
                element: <ServiceAndParts />
            },
            {
                path: "/inventory",
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