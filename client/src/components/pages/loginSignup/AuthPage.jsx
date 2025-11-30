import Navbar from "../../navbar/Navbar";
import "./authPage.css";
import { useState } from "react";
import axios from "axios";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        // SIGNUP REQUEST
        const res = await axios.post("http://localhost:3030/auth/register", {
          username,
          email,
          password,
        });
        console.log("Signup success:", res.data);
        alert("Account created!");
      } else {
        // LOGIN REQUEST
        const res = await axios.post("http://localhost:3030/auth/login", {
          email,
          password,
        });
        console.log("Login success:", res.data);
        alert("Logged in!");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred!");
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <Navbar />
      <div className="authPageWrapper">
        <div className="card">
          <h1 className="title">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>

          <form className="form" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn" disabled={loading}>
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Login"
                : "Sign Up"}
            </button>
          </form>

          <p className="toggle-text">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <span className="toggle" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="toggle" onClick={() => setMode("login")}>
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
