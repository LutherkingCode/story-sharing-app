import React, { useState, useContext } from "react";
import styles from "./new-story.module.css";
import {
  AuthentificationContext,
  StoriesContext,
} from "../components/authentification";
import { useNavigate } from "react-router-dom";

export default function AddStory() {
  const { authenticated } = useContext(AuthentificationContext);
  const { setListStories } = useContext(StoriesContext);
  const redirection = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("public");

  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000); // You can adjust the range as needed
  };

  
  if (authenticated==null) {
    // If not authenticated, redirect to the login page
    redirection("/");
    return null;
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const newStoryId = generateRandomId();

    if (!title || !content) {
      alert("Please fill in both title and content.");
      return;
    }

    const newStory = {
      id: newStoryId,
      user: authenticated.name,
      title,
      content,
      status,
      date: new Date().toLocaleDateString(),
    };
    setListStories((prevStories) => [...prevStories, newStory]);
    redirection("/");

    setTitle("");
    setContent("");
    setStatus("public");
  };

  return (
    <div className={styles.addStoryContainer}>
      <h2>Add a New Story</h2>
      <form onSubmit={handleSubmit} className={styles.storyForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={styles.statusSelect}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <button type="submit" className={styles.addButton}>
          Add Story
        </button>
      </form>
    </div>
  );
}
