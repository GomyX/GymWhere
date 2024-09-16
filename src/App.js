import "./App.css";
import Demo from "./demo/Demo";
import Landing from "./landing/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gymwhere-website" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/gymwhere-website/demo" element={<Demo />} />
      </Routes>
      {/* <Landing /> */}
      {/* <Demo /> */}
    </div>
  );
}

export default App;
