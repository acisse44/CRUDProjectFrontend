import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../Redux/store';
import "../App/App.css";
import Home from "../Pages/Home";
import AddNewCampus from "../Pages/campuses/AddNewCampus";
import Campuses from "../Pages/campuses/Campuses";
import Campus from "../Pages/campuses/Campus";
import AddNewStudent from "../Pages/students/AddNewStudent";
import Students from "../Pages/students/Students";
import Student from "../Pages/students/Student";

function App() {
  return (
    <Provider store={store}>
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
            <Route path="/campuses/add" element={<AddNewCampus/>} />
            <Route path="/students/add" element={<AddNewStudent />} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
