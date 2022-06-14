import './Fahrzeugankauf.css';
import {Header, Navbar, Footer, Jumbotrone, Logo, CarPurchase } from '../../components'

function Fahrzeugankauf() {
  return (
      <div>
        <div id='header-img-id' className='header-img-div'>
           <Header/>
            <Navbar />
            <div className='mka__logo-img'>
              <div className='mka__logo-size'>
              <Logo/>
              </div>
              </div>
            <div className='mka__title-wrapper'>
            <div className='mka__container'>
            <h1>FAHRZEUGANKAUF</h1>
            </div>
            </div>
            </div>
      <CarPurchase/>
      <Jumbotrone/>
        <Footer/>
        </div>
  );
}

export default Fahrzeugankauf;