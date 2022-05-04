import React from "react";
import "./Menu.scss";
const Menu = ({ menus }) => (
  <div className="Menu">
    <ul>
      {menus.map((menu) => (
        <li key={menu.url}>
          <a href={menu.url}>{menu.text}</a>
        </li>
      ))}
    </ul>
  </div>
);
export default Menu;
