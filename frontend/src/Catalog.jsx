import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Catalog.css";
import useAppContext from "./AppContext";

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

function RentButton({ tractor }) {
  const { state, dispatch } = useAppContext();
  function onRentClick() {
    dispatch({
      type: "NEW_BASKET_ITEM",
      item: tractor,
    });
  }
  const isRented = state.basket.find((t) => tractor.id === t.id);

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
  const tractor = {
    id: 1,
    commune: "Paris",
    category: "tracteur agricole",
    description: "Un exemple de description",
    imageUrl: "https://touslestracteurs.com/images/Case_IH/CX90.jpg",
  };
  return (
    <div className="catalog-item">
      <img src={tractor.imageUrl} />
      <div className="content">
        <span className="category">{tractor.category}</span>
        <p>{tractor.description}</p>
        <p>{tractor.commune}</p>
      </div>
      <div className="actions">
        <RentButton tractor={tractor} />
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
