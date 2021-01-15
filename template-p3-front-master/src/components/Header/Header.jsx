import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search_logo.png";
import iconSearch from "../../assets/iconSearch.png";

function Header() {
  const [open, setOpen] = useState(true);

  function changeOpen() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className="Header">
      <div className="logo">
        <img className="Logo" src={Logo} alt="logo" />
        <div className="container">
        <img
            className="logoCity"
            src={iconSearch}
            alt="search"
          />
          <input  className="input" placeholder="Recherchez votre ville ici..." />{" "}
          <button className="submi">Recherche</button>
        </div>
        
      </div>

      <button className="search" onClick={changeOpen}>
        <img className="main-logoSearch" src={Search} alt="search_logo" />
        Recherche
      </button>
      <div className="hidden">
        {open === true ? (
          <div></div>
        ) : (
          <div className="searchBar-city">
            <img
              className="secondary-logoSearch"
              src={iconSearch}
              alt="search_logo"
            />

            <input
              className="input-SearchBar-city"
              type="text"
              placeholder="Recherchez votre ville ici..."
            />
            <button className="submit">Rechercher</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
