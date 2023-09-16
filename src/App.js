import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";

import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
