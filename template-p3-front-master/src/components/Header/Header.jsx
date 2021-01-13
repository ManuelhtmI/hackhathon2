import "./Header.css";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search_logo.png";

function Header() {
  return (
    <div className="Header">
        <div className="logo">
        <img className="Logo" src={Logo} alt="logo" />
        </div>
        <div className="search"> 
         <img className="logoSearch" src={Search} alt="search_logo"  />
         Recherche
         </div>
    </div>
  );
}

export default Header;
