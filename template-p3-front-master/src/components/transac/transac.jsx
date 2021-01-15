import React, {useState, useEffect} from 'react'
import './transac.css'
import Arrow from '../../assets/arrow.png'
import man1 from '../assets/Man1_1.png';
import man9 from '../assets/Man2_1.png';
import man17 from '../assets/Man3_1.png';
import woman1 from '../assets/Woman1_1.png';
import woman9 from '../assets/Woman2_1.png';
import woman17 from '../assets/Woman3_1.png';
import man2 from '../assets/Man1_2.png';
import man10 from '../assets/Man2_2.png';
import man18 from '../assets/Man3_2.png';
import woman2 from '../assets/Woman1_2.png';
import woman10 from '../assets/Woman2_2.png';
import woman18 from '../assets/Woman3_2.png';
import man3 from '../assets/Man1_3.png';
import man11 from '../assets/Man2_3.png';
import man19 from '../assets/Man3_3.png';
import woman3 from '../assets/Woman1_3.png';
import woman11 from '../assets/Woman2_3.png';
import woman19 from '../assets/Woman3_3.png';
import man4 from '../assets/Man1_4.png';
import man12 from '../assets/Man2_4.png';
import man20 from '../assets/Man3_4.png';
import woman4 from '../assets/Woman1_4.png';
import woman12 from '../assets/Woman2_4.png';
import woman20 from '../assets/Woman3_4.png';
import man5 from '../assets/Man1_5.png';
import man13 from '../assets/Man2_5.png';
import man21 from '../assets/Man3_5.png';
import woman5 from '../assets/Woman1_5.png';
import woman13 from '../assets/Woman2_5.png';
import woman21 from '../assets/Woman3_5.png';
import man6 from '../assets/Man1_6.png';
import man14 from '../assets/Man2_6.png';
import man22 from '../assets/Man3_6.png';
import woman6 from '../assets/Woman1_6.png';
import woman14 from '../assets/Woman2_6.png';
import woman22 from '../assets/Woman3_6.png';
import man7 from '../assets/Man1_7.png';
import man15 from '../assets/Man2_7.png';
import man23 from '../assets/Man3_7.png';
import woman7 from '../assets/Woman1_7.png';
import woman15 from '../assets/Woman2_7.png';
import woman23 from '../assets/Woman3_7.png';
import man8 from '../assets/Man1_8.png';
import man16 from '../assets/Man2_8.png';
import man24 from '../assets/Man3_8.png';
import woman8 from '../assets/Woman1_8.png';
import woman16 from '../assets/Woman2_8.png';
import woman24 from '../assets/Woman3_8.png';

function Transac() {


    const Type = [
        {
            img :  
            [
                man1,
                man9,
                man17,
                woman1,
                woman9,
                woman17
            ],
            details : [
                "Blé Standard 76-220-11",
                "Epeautre Non Décortiqué",
                "Blé C2",
                "Blé Fourrager Ps: 74",
                "Blé Dur Aux Normes",
                "Blé Améliorant"
            ],
            type : "BLÉ"
        },
        {
            img : [
                man2,
                man10,
                man18,
                woman2,
                woman10,
                woman18
            ],
            details : [
                "Avoine Noire Ps48/50",
                "Avoine Noire Ps52"
            ],
            type : "AVOINE"
        },
        {
            img : [
                man3,
                man11,
                man19,
                woman3,
                woman11,
                woman19
            ],
            details : [
                "TRITICALE"
            ],
            type : "TRITICALE"
        },
        {
            img : [
                man6,
                man14,
                man22,
                woman6,
                woman14,
                woman22
            ],
            details : [
                "Orge Fourragère Ps 62-63",
                "Orge Fourragère Ps 60",
                "Orge Fourragère Variété Spécifique",
                "Orge Avec 9% Maximum De Blé"
            ],
            type : "ORGE"
        },
        {
            img : [
                man8,
                man16,
                man24,
                woman8,
                woman16,
                woman24
            ],
            details : [
                "Maïs Grain",
                "Maïs Rond"
            ],
            type : "MAÏS"
        },
        {
            img : [
                man7,
                man15,
                man23,
                woman7,
                woman15,
                woman23
            ],
            details : [
                "Pois Jaunes",
                "Pois Fourragers",
                "Pois Verts"
            ],
            type : "POIS"
        },
        {
            img : [
                man5,
                man13,
                man21,
                woman5,
                woman13,
                woman21
            ],
            details : [
                "Colza"
            ],
            type : "COLZA"
        },
        {
            img : [
                man4,
                man12,
                man20,
                woman4,
                woman12,
                woman20
            ],
            details : [
                "Tournesol Standard",
                "Tournesol Oléique"
            ],
            type : "TOUNESOL"
        },
        {
            img : [
                man3,
                man11,
                man19,
                woman3,
                woman11,
                woman19
            ],
            details : [
                "Féveroles Fourragères",
                "Féveroles C2"
            ],
            type : "FEVEROLES"
        }
    ]
    const [num, setNum] = useState(0)
    const [det, setDet] = useState(0)
    const [avatar, setAvatar] = useState(0)
    const [verif, setVerif] = useState(0)

    const back = document.getElementsByClassName("fond-transac")
    const card = document.getElementsByClassName("transac-card")
    const totalcard = document.getElementsByClassName("transac-total")

    console.log(back[0])

    useEffect(() => {
        setVerif(Type[num].details.length)
    }, [num])

    const changeDetailsNext = () => {
        if(det===verif-1){
            setDet(0)
        }
        else{
            setDet(det+1)
        }
    }

    const changeDetailsPrev = () => {
        if(det===0){
            setDet(verif-1)
        }
        else{
            setDet(det-1)
        }
    }

    const blackClose = () => {
        back[0].style.display="none"
        card[0].style.display="none"
        card[0].style.opacity="0%"
    }

    const blackOpen = () => {
        // totalcard[0].style.height="100vh"
        back[0].style.display="flex"
        card[0].style.display="flex"
        card[0].style.opacity="100%"
    }

    const changeTypeNext = () => {
        setAvatar(Math.floor(Math.random() * Math.floor(6)))
        setDet(0)
        if(num===8){
            setNum(0)
        }
        else{
            setNum(num+1)
        }
    }

    const changeTypePrev = () => {
        setAvatar(Math.floor(Math.random() * Math.floor(6)))
        setDet(0)
        if(num===0){
            setNum(8)
        }
        else{
            setNum(num-1)
        }
    }

    return (
        <div className="transac-total">
            <div onClick={blackClose} className="fond-transac"></div>
            <div className="transac-card">
                <h2 className="transac-card-title">TRANSACTION</h2>
                <div className="transac-card-middle">
                    <img className="transac-card-select1-icon" src={Type[num].img[avatar]} alt="Avatar de selection"/>
                    <div className="transac-card-select1">
                        <div onClick={changeTypePrev} className="fleche1-L">
                            <img className="fleche" src={Arrow} alt="Arrow"/>
                        </div>
                        <div className="transac-card-select1-IconText" >
                            <h2 className="transac-card-select1-text">{Type[num].type}</h2>
                        </div>
                        <div onClick={changeTypeNext} className="fleche1-R">
                            <img className="fleche" src={Arrow} alt="Arrow"/>
                        </div>
                    </div>
                    
                    <div className="transac-card-select1">
                        <div onClick={changeDetailsPrev} className="fleche1-L">
                            <img className="fleche" src={Arrow} alt="Arrow"/>
                        </div>
                        <div className="transac-card-select1-IconText" >
                            <h2 className="transac-card-select1-text">{Type[num].details[det]}</h2>
                        </div>
                        <div onClick={changeDetailsNext} className="fleche1-R">
                            <img className="fleche" src={Arrow} alt="Arrow"/>
                        </div>
                    </div>
                </div>
                <a href="https://comparateuragricole.com/collecte/oleoproteagineux/tournesol/tournesol-oleique"><button className="transac-card-button">ACCÉDER</button></a>
                
            </div>
            <button onClick={blackOpen} className="transac-button">EFFECTUER MA TRANSACTION</button>
        </div>
    )
}

export default Transac
