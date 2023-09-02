import React, { useContext } from "react";
import { StoriesContext, AuthentificationContext } from '../components/authentification';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./stories.module.css";
import Story from "../components/story"; // Import your Story component

export default function Stories() {
  const { listStories } = useContext(StoriesContext);
  const { authenticated } = useContext(AuthentificationContext);
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Check if the user is not authenticated, and if so, redirect to the login page
  if (authenticated===null) {
    navigate("/login");
    return null; // Return null to prevent rendering the component
  }

  return (
    <div className={styles.storiesContainer}>
      <h2>Stories</h2>
      {listStories.map((story, index) => (
        <Story
          key={index}
          id={story.id}
          shortText={story.title}
          user={story.user}
          fullText={story.content}
          status={story.status}
          date={story.date}
        />
      ))}
    </div>
  );
}
