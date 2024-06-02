import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppBar.css";
import { Brand } from "./Brand";

export function AppBar() {
  const navigateTo = useNavigate();

  return (
    <ul className="menu">
      <li className="brand">
        <Brand />
      </li>
      <li onClick={() => navigateTo("/catalog")}>Catalogue</li>
      <li onClick={() => navigateTo("/basket")}>
        <FontAwesomeIcon icon={fas.faShoppingCart} />
      </li>
    </ul>
  );
}
