import "../App/App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Campuses from "../Pages/campuses/Campuses";
import Students from "../Pages/students/Students";
import Campus from "../Pages/campuses/Campus";
import Student from "../Pages/students/Student";
//import addNewCampus from "../Pages/campuses/addNewCampus"
//import addNewStudent from "../Pages/students/addNewStudent"

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav-container">
          <ul className="nav-links">
            <li className="nav-item-left">
            <Link to="/" id="home-link">Home</Link>
            </li>
            <li className="nav-item-right">
            <Link to="/campuses" id="campuses-link">Campuses</Link>
            </li>
            <li className="nav-item-right">
            <Link to="/students" id="students-link">Students</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses/*" element={<Campuses />} />
          <Route path="/campuses/:id" element={<Campus />} />
          <Route path="/students/*" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
         {//<Route path="/campuses/add" element={<addNewCampus/>} />
          //<Route path="/students/add" element={<addNewStudent />} />
        }

        </Routes>
      </div>
    </Router>
  );
}

export default App;
