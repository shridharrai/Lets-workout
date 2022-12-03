import { type } from "../../context/constants";
import { useWorkoutContext } from "../../hooks/WorkoutHook";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./index.css";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const res = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: type.DELETE_WORKOUT, payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
