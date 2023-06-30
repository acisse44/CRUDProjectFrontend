import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Students from "../Pages/Students";
import "../App/App.css"
import Campuses from "../Pages/Campuses";
import Student from "../Pages/Student"
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav-container">
          <ul className="nav-links">
            <li className="nav-item-left">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item-right">
              <Link to="/campuses">Campuses</Link>
            </li>
            <li className="nav-item-right">
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses/*" element={<Campuses />} />
          <Route path="/students/*" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
