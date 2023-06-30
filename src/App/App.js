import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Students from "../Pages/Students";
import "../App/App.css"
import Campuses from "../Pages/Campuses";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses/*" element={<Campuses />} />
          <Route path="/students/*" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
