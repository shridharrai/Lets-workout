import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <h3>Sign Up</h3>

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type="password" onChange={() => console.log("Hii")} />
    </form>
  );
};
