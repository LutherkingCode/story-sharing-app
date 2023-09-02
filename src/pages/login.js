import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import { AuthentificationContext } from "../components/authentification";
import { useNavigate } from "react-router";

export default function Login() {
  const { setAuthenticated } = useContext(AuthentificationContext);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const redirection = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name: name, id: id };
        setAuthenticated(user);
        redirection("/");

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          id: id,
        }),
      });

      if (response.ok) {
        const user = { name: name, id: id };
        setAuthenticated(user);
        redirection("/");
      } else {
        console.log("Authentication failed");

      }
    } catch (error) {
      console.error("Error authenticating:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login to Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputField}
          placeholder="enter your id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}
