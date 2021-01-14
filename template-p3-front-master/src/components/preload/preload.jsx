import React, { useState, useEffect } from 'react'
import './preload.css'
import axios from 'axios'
import arrow from '../img/icone-fleche.png'
import icon1 from '../img/icone-transac1.png'
import icon2 from '../img/icone-transac2.png'
import logo from '../img/comparateur-agricole_couleurs.jpg'
import perso from '../img/perso.png'



function Preload() {

    const [idTransac, setIdTransac] = useState([{id:1}])
    const [idFarmers, setIdFarmers] = useState([{id:1}])
    const [page, setPage] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/preload").then((res) => {
          setIdTransac(res.data);
        });

        axios.get("http://localhost:8000/api/preloadFarmers").then((res) => {
          setIdFarmers(res.data);
        });
        
        setPage(document.getElementsByClassName("total"))

    }, []);

    

    const show = () => {
        console.log("Transac",idTransac[0].id)
        console.log(page[0].style.display)
        page[0].style.display = "none"
    }

    return (
        <div onClick={show} className="total">
            <div className="total-part">
                <picture><img className="logo-preload" src={logo} alt="Logo comparateur-agricole"/></picture>
                <div className="div-pres">
                    <div id="anim1" className="pres-anim1">
                        <div className="pres-anim1-div">
                            <img className="number-icon" src={icon1} alt="Icone blé"/>
                            <div className="total-part-div">
                                <h2 className="number">{idTransac[0].id}</h2>
                                <h2 className="number-text">TRANSACTIONS EFFECTUÉES</h2>
                            </div>
                            <img className="number-icon" src={icon2} alt="Icone argent"/>
                        </div>
                        <div className="pres-anim1-div2">
                            <img className="number-arrow" src={arrow} alt="Flèche circulaire"/>
                        </div>
                    </div>
                    
                    <div className="pres-anim2">
                        
                        <div className="total-part-div-perso">
                            <img className="perso2" src={perso} alt="Icone utilisateur"/>
                            <img className="perso4" src={perso} alt="Icone utilisateur"/>
                            <img className="perso1" src={perso} alt="Icone utilisateur"/>
                            <img className="perso5" src={perso} alt="Icone utilisateur"/>
                            <img className="perso2" src={perso} alt="Icone utilisateur"/>
                        </div>
                        <div className="total-part-div-perso3">
                            <img className="perso1" src={perso} alt="Icone utilisateur"/>
                            <img className="perso2" src={perso} alt="Icone utilisateur"/>
                            <img className="perso5" src={perso} alt="Icone utilisateur"/>
                            <img className="perso3" src={perso} alt="Icone utilisateur"/>
                            <img className="perso4" src={perso} alt="Icone utilisateur"/>
                        </div>
                        <div className="total-part-div-perso2">
                            <img className="perso1" src={perso} alt="Icone utilisateur"/>
                            <img className="perso2" src={perso} alt="Icone utilisateur"/>
                            <img className="perso3" src={perso} alt="Icone utilisateur"/>
                            <img className="perso4" src={perso} alt="Icone utilisateur"/>
                        </div>
                        
                        <div className="total-part-div2">
                            <h2 className="number">{idFarmers.length}</h2>
                            <h2 className="number-text">FERMIERS TRAVAILLENT AVEC NOUS</h2>
                        </div>
                    </div>

                    <div className="total-part-div3">
                        <h2 className="number-text3">ON VOUS LAISSE DECOUVRIR...</h2>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}

export default Preload
