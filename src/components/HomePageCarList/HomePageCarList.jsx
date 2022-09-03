import React, {useEffect, useState} from 'react'
import "./HomePageCarList.css";
import { FaCarAlt, FaStar, FaWallet, FaCommentDots } from "react-icons/fa";
import { IconContext } from "react-icons";
import HomeSlider from "../HomeSlider/HomeSlider";

const HomePageCarList = () => {
  const [cars, setCars] = useState([]);

  const url = 'http://finity.pro/clients/mkautomobile/cars/all';

useEffect(() => {
  fetch(url)
  .then(response => response.json())
  .then(cars => {
  const currentCars = cars.slice(-5);
  setCars(currentCars)
});
}, []);


  return (
    <div className="mka__wrapper-home-list">
      <div className="mka__container">
        <div className="mka__content">
          <h2>FAHRZEUGANGEBOTE</h2>
          <div className="mka__section-divider-second-divider"></div>
          <div>
          <HomeSlider cars={cars}/>
          </div>
          <div className="mka__section-divider"></div>
          <div className="mka__shortcuts-home-list">
            <div className="mka__shortcut-home-list">
              <IconContext.Provider value={{ className: "mka__icon-size" }}>
                <a href="/fahrzeugangebote">
                  <i>
                    <FaCarAlt />
                  </i>
                </a>
              </IconContext.Provider>
              <a href="/fahrzeugangebote">FAHRZEUGANGEBOTE</a>
            </div>
            <div className="mka__shortcut-home-list">
              <IconContext.Provider value={{ className: "mka__icon-size" }}>
                <a href="/finanzierung">
                  <i>
                    <FaStar />
                  </i>
                </a>
              </IconContext.Provider>
              <a href="/finanzierung">FINANZIERUNG</a>
            </div>
            <div className="mka__shortcut-home-list">
              <IconContext.Provider value={{ className: "mka__icon-size" }}>
                <a href="/fahrzeugankauf">
                  <i>
                    <FaWallet />
                  </i>
                </a>
              </IconContext.Provider>
              <a href="/fahrzeugankauf">FAHRZEUGANKAUF</a>
            </div>
            <div className="mka__shortcut-home-list">
              <IconContext.Provider value={{ className: "mka__icon-size" }}>
                <a href="/kontakt">
                  <i>
                    <FaCommentDots />
                  </i>
                </a>
              </IconContext.Provider>
              <a href="/kontakt">KONTAKT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageCarList
