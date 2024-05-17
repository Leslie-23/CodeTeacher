import "../src/CSS/App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AsideTwo from "../src/Components/AsideTwo";
import Main from "./Main.js";
import App2 from "./App2.js";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <AsideTwo /> */}
      <Main />
      <App2 />
    </div>
  );
}

export default App;
