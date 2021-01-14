import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import iconSearch from "../../assets/iconSearch.png";
import SearchLogo from "../../assets/search_logo.png";
import axios from "axios";

function Header() {
  const [open, setOpen] = useState(true);
  const [cities, setCities] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => setCities(res.data));
  }, []);



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
          <img className="logoCity" src={iconSearch} alt="search" />
          {/* <input  className="input" placeholder="Recherchez votre ville ici..." />{" "}
          <button className="submi">Recherche</button> */}

          <select className="input">
            {cities.map((cities) => (
              <option>{cities.city} </option>
            ))}
          </select>

        </div>
      </div>
      <button className="search" onClick={changeOpen}>
        <img className="main-logoSearch" src={SearchLogo} alt="search_logo" />
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
