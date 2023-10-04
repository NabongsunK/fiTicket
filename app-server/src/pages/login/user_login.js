import React, { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("서버로부터 받은 응답:", data); // 이 부분을 추가

      return data.token;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    if (token) {
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>로그인되었습니다.</p>
        <button onClick={logout}>로그아웃</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
