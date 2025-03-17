import { useEffect } from "react";
import { useState } from "react";

export default function Login({style}) {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLog, setIsLog] = useState("");

  function checkUser(e) {
    e.preventDefault();
    if (user && userName !== "" && userEmail !== "" && userPassword !== "") {
      setUser({ name: userName, email: userEmail, password: userPassword });
      setIsLog('true');
    } else {
      setErrorMessage("All fields must be filled in");
    }
  }
  useEffect(() => {
    let newUsers = JSON.parse(localStorage.getItem("users"));
    let newLog = localStorage.getItem("isLog");
    if (newUsers) {
        setUser(newUsers)
    }

    if (newLog) {
        setIsLog(newLog)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("isLog", isLog);
    localStorage.setItem("name", userName);
    localStorage.setItem("email", userEmail);
  }, [user, isLog, userName, userEmail]);

  return (
    <div style={{display: `${style}`}} className="loginPage">
      <form onSubmit={checkUser}>
        <h1>Login</h1>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Email..."
        />
        <input
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          placeholder="Password..."
        />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
