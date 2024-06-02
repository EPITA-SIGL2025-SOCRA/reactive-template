import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ul className="menu">
        <li className="brand">
          <h3>Sotracteur</h3>
        </li>
        <li>Catalogue</li>
        <li>
          <FontAwesomeIcon icon={fas.faShoppingCart} />
        </li>
      </ul>
      <main>
        <form className="search-input">
          <input type="search" autoFocus placeholder="Choisir une commune..." />
          <button type="submit">
            <FontAwesomeIcon icon={fas.faSearch} />
          </button>
        </form>
        <div className="search-results">
          <div className="catalog-item">
            <img src="https://touslestracteurs.com/images/Case_IH/CX90.jpg" />
            <div className="content">
              <span className="category">An example of card item</span>
              <p>Some description</p>
              <p>CITY</p>
            </div>
            <div className="actions">
              <button>Rent</button>
              <a>More...</a>
            </div>
          </div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
          <div class="catalog-item-block"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
