import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "")
      return alert("Enter username and password");
    setIsLoggedIn(true);
    props.onGetData(username);
  };

  return (
    <div>
      {!isLoggedIn && (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default Login;
