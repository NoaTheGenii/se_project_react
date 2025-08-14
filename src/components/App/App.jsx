import WeatherApi from "../../utils/weatherApi";
import Main from "../Main/Main";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  return (
    <div className="app">
      <Header />
      <Main weatherApi={WeatherApi} />
      <Footer />
      <ModalWithForm />
    </div>
  );
}

export default App;
