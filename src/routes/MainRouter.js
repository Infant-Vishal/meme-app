import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DetailedPage from "../pages/DetailedPage";
import FavMemesPage from "../pages/FavMemesPage";
import LoginPage from "../pages/login";
import MemePage from "../pages/MemePage";

const MainRouter = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    localStorage.setItem("memePageLoggedIn", false);
  }

  const isLogged = JSON.parse(localStorage.getItem("memePageLoggedIn"));

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/memes"
          element={isLogged ? <MemePage /> : <Navigate replace to={"/"} />}
        ></Route>
        <Route
          path="/fav_memes"
          element={isLogged ? <FavMemesPage /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/detailed_page"
          element={isLogged ? <DetailedPage /> : <Navigate replace to={"/"} />}
        />
      </Routes>
    </>
  );
};

export default MainRouter;
