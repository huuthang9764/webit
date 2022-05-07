import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./page";
import React from "react";
import "./App.css";
import { PrivateRoute, LoginRoute } from "./constant/PrivateRoute";
import { Register } from "containers";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
