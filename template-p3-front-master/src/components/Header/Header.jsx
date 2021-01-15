import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import axios from "axios";
import iconFarmers from "../assets/66307.png";
import euros from "../assets/euros.png";
import home from "../assets/home.png";
import Woman1_1 from "../assets/Woman1_1.png";
import downArrow from "../../assets/down-arrow.png";

function Header() {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);

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
  function changeOpen2() {
    if (open2 === true) {
      setOpen2(false);
    } else {
      setOpen2(true);
    }
  }

  return (
    <div className="Header">
      <div className="logo-header">
        <img className="Logo" src={Logo} alt="logo" />
        <button className="selectLegend" onClick={changeOpen}> LÉGENDE
          <img className="logoLegent" src={downArrow} alt="logo legend" /> 
        </button>
      </div>

      <button className="search" onClick={changeOpen}>
        <img className="main-logoSearch" src={downArrow} alt="search_logo" />
        Légendes
      </button>
      <div className="hidden">
        {open === true ? (
          <div></div>
        ) : (
          <div className="LegendOpen">
            <div className="listLegend">
              <ul>
                <li>
                  {" "}
                  <img className="image-Legend" src={euros} alt="img" />{" "}
                  Acheteurs
                </li>
                <li>
                  {" "}
                  <img
                    className="image-Legend"
                    src={iconFarmers}
                    alt="img"
                  />{" "}
                  Agriculteurs
                </li>
                <li>
                  <img className="image-Legend" src={home} alt="img" />{" "}
                  Comparateur Agricole
                </li>
                <li>
                  {" "}
                  <img className="image-Legend" src={Woman1_1} alt="img" />{" "}
                  Profils Agriculteurs
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
