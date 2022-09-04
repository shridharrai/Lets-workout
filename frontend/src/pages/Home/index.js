import { useState, useEffect } from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm";
import "./index.css";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const res = await fetch("/api/workouts");
    const workouts = await res.json();

    if (res.ok) {
      setWorkouts(workouts);
    }
  };

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
