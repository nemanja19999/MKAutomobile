import "./Finanzierung.css";
import {
  Header,
  Navbar,
  Footer,
  Jumbotrone,
  Logo,
  Financing,
} from "../../components"

const Finanzierung = () => {
  return (
    <>
      <div id="header-img-id" className="header-img-div">
        <Header />
        <Navbar />
        <div className="mka__logo-img">
          <div className="mka__logo-size">
            <Logo />
          </div>
        </div>
        <div className="mka__title-wrapper">
          <div className="mka__container">
            <h1>FINANZIERUNG</h1>
          </div>
        </div>
      </div>
      <Financing />
      <Jumbotrone />
      <Footer />
    </>
  )
}

export default Finanzierung