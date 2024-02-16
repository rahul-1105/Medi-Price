import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/about";
import PageNotFound from "./pages/pageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import Request from "./pages/Request";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-full bg-richblack">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/request" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route
          path="/request"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Request />
            </PrivateRoute>
          }
        />
        <Route
          path="/chats"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
