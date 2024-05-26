import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Laptop,
  Login,
  Error,
  Motherboard,
  Desktop,
  Handheld,
  Support,
} from "./Pages";
import Products from "./Components/Products.jsx";
import {
  allLaptopProducts,
  orderedList,
  sideFilterProducts,
  motherboardOrdedList,
  motherBoardSideFilterProducts,
  allMotherBoardProducts,
  orderedListDesktop,
  allPcs,
  DesktopSideFilterProducts,
  sideFilterGamingGears,
  gamingGearProducts,
} from "./Constants";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Laptop",
    element: <Laptop />,
  },
  {
    path: "/Products",
    element: (
      <Products
        allProducts={allLaptopProducts}
        list={orderedList}
        sideFilterList={sideFilterProducts}
        title={"laptops"}
      />
    ),
  },

  // MotherBoard Page
  {
    path: "/Motherboards/Intel-Z790",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
        Filter={"Intel Z790"}
      />
    ),
  },

  {
    path: "/Motherboards",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
      />
    ),
  },

  {
    path: "/Motherboards/MEG-SERIES",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
        Filter={"MEG Series"}
      />
    ),
  },

  {
    path: "/Motherboards/MAG-SERIES",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
        Filter={"MAG Series"}
      />
    ),
  },

  {
    path: "/Motherboards/MPG-SERIES",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
        Filter={"MPG Series"}
      />
    ),
  },

  {
    path: "/Motherboards/PRO-SERIES",
    element: (
      <Products
        allProducts={allMotherBoardProducts}
        list={motherboardOrdedList}
        sideFilterList={motherBoardSideFilterProducts}
        title={"Motherboards"}
        Filter={"Pro Series"}
      />
    ),
  },

  {
    path: "/Motherboard",
    element: <Motherboard />,
  },
  // Desktop Page
  {
    path: "/Desktop",
    element: <Desktop />,
  },
  {
    path: "/Gaming/Pcs",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/MEG-SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"MEG Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/MPG-SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"MPG Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/MAG-SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"MAG Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/AEGIS/SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"Aegis Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/TRIDENT/SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"Trident Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/INFINITE/SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"Infinite Series"}
      />
    ),
  },
  {
    path: "/Gaming/Pcs/CODEX/SERIES",
    element: (
      <Products
        allProducts={allPcs}
        list={orderedListDesktop}
        sideFilterList={DesktopSideFilterProducts}
        title={"Desktop"}
        Filter={"Codex Series"}
      />
    ),
  },

  // Gaming Gears
  {
    path: "/Gaming/Gears",
    element: (
      <Products
        allProducts={gamingGearProducts}
        sideFilterList={sideFilterGamingGears}
      />
    ),
  },

  // Handheld
  { path: "/Handheld/Claw-A1MX", element: <Handheld /> },

  // Support
  { path: "/Support", element: <Support /> },

  // Error page
  {
    path: "*",
    element: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
