import "./App.css";
import NavBar from "./Components/Navbar";
import NewEmp from './Components/NewEmp';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
          <Route path="/" element={<NewEmp />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;