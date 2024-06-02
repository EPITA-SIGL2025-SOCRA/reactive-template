import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Catalog.css";

function SearchByCommune() {
  return (
    <form className="search-input">
      <input type="search" autoFocus placeholder="Choisir une commune..." />
      <button type="submit">
        <FontAwesomeIcon icon={fas.faSearch} />
      </button>
    </form>
  );
}

function TractorsNearMe() {
  return (
    <div className="search-results">
      <TractorCard />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
      <TractorBlock />
    </div>
  );
}

function TractorBlock() {
  return <div className="catalog-item-block"></div>;
}

function RentButton() {
  const [isRented, setRent] = React.useState(false);
  function onRentClick() {
    setRent(true);
  }

  const buttonText = isRented ? "Ajouté au panier" : "Réserver";

  return (
    <button
      disabled={isRented}
      onClick={() => {
        onRentClick();
      }}
    >
      {buttonText}
    </button>
  );
}

function TractorCard() {
  return (
    <div className="catalog-item">
      <img src="https://touslestracteurs.com/images/Case_IH/CX90.jpg" />
      <div className="content">
        <span className="category">Une catégorie</span>
        <p>Un exemple de description</p>
        <p>COMMUNE</p>
      </div>
      <div className="actions">
        <RentButton />
        <a>Détail...</a>
      </div>
    </div>
  );
}

export function Catalog() {
  return (
    <>
      <SearchByCommune />
      <TractorsNearMe />
    </>
  );
}
