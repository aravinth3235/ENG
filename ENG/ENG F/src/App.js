import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "../src/Components/Home";
import Header from "./Components/Header";
import Navs from "./Components/Navs";
import Home2 from "./Components/Home2";
import AddSequence from "./Components/AddSequence";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const nav = useNavigate();
  const winnslocation = window.location.pathname.split("/")[1];
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createsequence />} />
      </Routes> */}
      <Header />
      <div style={{ marginTop: "30px" }}></div>
      <Navs />
      {winnslocation && (
        <div className="hmbtn">
          <button onClick={() => nav("/")}>Home</button>
          <button onClick={() => nav(-1)}>Back</button>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Home2 />} />
        <Route path="/edit" element={<Home2 />} />
        <Route path="/view" element={<Home2 />} />
        <Route
          path="/create/:type/:sequencecharset"
          element={<AddSequence />}
        />
        <Route path="/edit/:type/:sequencecharset" element={<AddSequence />} />
        <Route path="/view/:type/:sequencecharset" element={<AddSequence />} />
      </Routes>
    </div>
  );
}

export default App;
