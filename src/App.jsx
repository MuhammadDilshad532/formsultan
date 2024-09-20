import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-96 flex justify-center items-center ml-[40%] mt-10">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/" element={<h1>Welcome! Please log in.</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
