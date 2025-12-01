import Navbar from "../../navbar/Navbar";
import "./authPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Store from "../../../store/store";

export default function AuthPage() {
  const { config, setConfig } = Store();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;
      if (mode === "signup") {
        res = await axios.post("http://localhost:3030/auth/register", {
          username,
          email,
          password,
        });
      } else {
        res = await axios.post("http://localhost:3030/auth/login", {
          email,
          password,
        });
      }

      console.log(res.data);
      // Gelen tüm veriyi config içine kaydet
      setConfig({
        ...config,
        user: res.data.user || res.data,
        isLoggedIn: true,
      });

      // Login sonrası anasayfaya yönlendir
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("An error occurred!");
    }

    setLoading(false);
  };

  const handleLogout = () => {
    setConfig({ ...config, user: null, isLoggedIn: false });
    setMode("login");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="page">
      <Navbar />
      <div className="authPageWrapper">
        <div className="card">
          <h1 className="title">
            {config.isLoggedIn
              ? `Welcome, ${config.user?.username || config.user?.email}`
              : mode === "login"
              ? "Welcome Back"
              : "Create Account"}
          </h1>

          {/* Eğer login değilse form göster, login ise sadece logout */}
          {!config.isLoggedIn ? (
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
          ) : (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          )}

          {/* Toggle sadece login değilken */}
          {!config.isLoggedIn && (
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
          )}
        </div>
      </div>
    </div>
  );
}
