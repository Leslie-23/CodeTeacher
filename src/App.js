import "../src/CSS/App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AsideTwo from "../src/Components/AsideTwo";
import Main from "./Main.js";
import App2 from "./App2.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <AsideTwo /> */}
      <Main />
      <App2 />
      <Footer />
    </div>
  );
}

export default App;
