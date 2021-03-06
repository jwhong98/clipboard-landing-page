import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Sponsors />
      <SectionFour />
      <Footer />
    </>
  );
}

export default App;
