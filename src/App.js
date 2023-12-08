import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deploy from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deploy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
