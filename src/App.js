import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
function App() {
  const MENUS = [
    { text: "Website", url: "http://thebaodev.me" },
    { text: "Blog", url: "http://blog.thebaodev.me" },
    { text: "Blog", url: "http://blog.thebaodev.me" },
    { text: "Blog", url: "http://blog.thebaodev.me" },
  ];
  return (
    <div className="App">
      <Menu menus={MENUS} />
    </div>
  );
}

export default App;
