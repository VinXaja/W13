/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from 'react';
import CatalogItem from "./CatalogItem.jsx"
import "./App.css";

class Catalog extends React.Component {
  constructor() {
    super();
    this.items = [
      ["Classical Mythology", "Mark P. O. Morford", "Oxford University Press", 2002],
      ["Rules of the Wild", "Francesca Marciano", "Random House Inc", 1998, true],
      ["Clara Callan", "Richard Bruce Wright", "HarperFlamingo Canada", 2001],
      ["Wild Animus", "Rich Shapero", "Too Far", 2004, true],
      ["Tage der Unschuld", "Richard North Patterson", "Goldmann", 2000],
      ["The Hellfire Club", "Peter Straub", "Random House Inc", 1996],
      ["The Night Listener", "Armistead Maupin", "HarperCollins Publishers", 2000, true],
      ["Night Tales", "Nora Roberts", "Silhouette", 2000],
    ];
  }

  render() {
    let allItems = this.items.map((item, index) => {
      return (
        <>
          <div className="col-sm-6 col-lg-4 mb-4 book">
            <CatalogItem item={item} />
          </div>
        </>
      );
    });
    return (
      <>
        {allItems}
      </>
    );
  }
}

export default Catalog;
