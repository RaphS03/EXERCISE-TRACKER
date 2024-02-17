import React from "react";
import { useParams } from "react-router-dom";
import EditExercises from "./edit-exercise.component";

function EditExercisesWrapper() {
  const { id } = useParams();
  return <EditExercises exerciseId={id} />;
}

export default EditExercisesWrapper;
