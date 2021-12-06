import "./App.css";
import Header from "./components/Header/Header";
import MapComp from "./components/MapComp/MapComp";
import HeaderTwo from "./components/HeaderTwo/HeaderTwo";
import FloatingDiv from "./components/FloatingDIv/FloatingDiv";

function App() {
  return (
    <div className="App">
      <div className="headerRow">
        <Header></Header>
        <HeaderTwo></HeaderTwo>
      </div>
      <MapComp></MapComp>
      <FloatingDiv></FloatingDiv>
    </div>
  );
}

export default App;
