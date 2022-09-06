import { useEffect } from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm";
import { type } from "../../context/constants";
import { useWorkoutContext } from "../../hooks/WorkoutContext";
import "./index.css";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: type.SET_WORKOUTS, payload: json });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
