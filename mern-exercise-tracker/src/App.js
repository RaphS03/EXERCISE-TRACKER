import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExerciseWrapper from "./components/edit-exercise-wrapper";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExerciseWrapper />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
