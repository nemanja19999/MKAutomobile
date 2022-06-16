import './Home.css';
import {Header, Navbar, Footer, Jumbotrone, Logo} from '../../components'

function Home() {
  return (
    <div>
      <div id='home-img-id' className='home-img-div'>
         <Header/>
          <Navbar />
          <div className='mka__logo-img'>
            <div className='mka__logo-size'>
            <Logo/>
            </div>
            </div>
            <h2 id="mka__home-subtitle">HERZLICH WILLKOMMEN</h2>
            <div className="mka__car-img-div">
            <img id="bmw-min" className="mka__car-img" src={require("../../assets/bmw-min.png")} alt="bmw-min" />
            <img id="mercedes-min" className="mka__car-img" src={require("../../assets/mercedes-min.png")} alt="mercedes-min" />
            </div>
            <p id="mka__home-description">Probefahrt und Besichtigung sind ausschließlich nach Terminvereinbarung möglich</p>
          <div className='mka__title-wrapper'>
          <div className='mka__container'>
          </div>
          </div>
          </div>
    <Jumbotrone/>
      <Footer/>
    </div>
  );
}

export default Home;