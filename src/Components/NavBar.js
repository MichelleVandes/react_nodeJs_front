// Ressource : youtube.com/watch?v=Z4dTp3HiESs

import { useState, useEffect } from "react";
import "./NavBar.css";
import { AiOutlineBars } from "react-icons/ai";

export const  NavBar = (props) => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

   useEffect(() => {
const changeWidth = () => {
    setLargeur(window.innerWidth);

    if (largeur < 500) {setToggleMenu(false)}

};

       window.addEventListener("resize", changeWidth);
       return () => window.remove("resize", changeWidth);

   }, []) // le tableau vide précise que useEffect ne sera utilisé qu'une seule fois 

    return (
      <nav>
        {toggleMenu && ( // Short-Circuit Operator : Si toggleMenu true alors renvoie liste sinon renvoie rien
        <ul className="liste">
          <li className="item">accueil</li>
          <li className="item">service</li>
          <li className="item">contact</li>
        </ul>
        )} 

        <button
          onClick={toggleNavSmallScreen}
           className="btn btn-outline-dark"
        >
          <AiOutlineBars />
        </button>
      </nav>
    );
}