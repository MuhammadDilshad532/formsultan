import "./App.css";
import SubmittedDataTable from "./components/SubmittedDataTable/SubmittedDataTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";

function App() {
  return (
    <Router>
      <div className="w-96 flex justify-center items-center ml-[40%] mt-10">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/submitted-data" element={<SubmittedDataTable />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
