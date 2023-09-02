import React, { useState, useReducer, useContext, useEffect } from "react";
import {
  StoriesContext,
  AuthentificationContext,
} from "../components/authentification";
import styles from "./story.module.css"; // Import the CSS file

export default function Story({ id, user, shortText, fullText, status, date }) {
  const { listStories, setListStories } = useContext(StoriesContext);
  const { authenticated } = useContext(AuthentificationContext);

  const initialState = {
    data: listStories,
    isEditing: false,
    editedContent: fullText,
  };

  function reducer(state, action) {
    let newState = state;
    switch (action.type) {
      // ... (rest of your reducer code)
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isEditing, editedContent } = state;
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const handleStatusChange = () => {
    dispatch({ type: "UPDATESTATUS", payload: { id } });
  };

  const handleToggleKnown = () => {
    dispatch({ type: "TOGGLEKNOWN", payload: { id } });
  };

  const handleEditClick = () => {
    dispatch({ type: "TOGGLEEDIT" });
  };

  const handleEditSave = () => {
    dispatch({ type: "SAVEEDIT", payload: { id } });
  };

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(data));
  }, [data]);

  return (
    <div className={styles.storyContainer}>
      <p>{user}</p>
      <p>{date}</p>

      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) =>
            dispatch({
              type: "EDITCONTENT",
              payload: { editedContent: e.target.value },
            })
          }
        />
      ) : showFullText ? (
        fullText
      ) : (
        shortText
      )}

      <br />
      <button onClick={toggleText}>
        {showFullText ? "Show Less" : "Read More"}
      </button>

      {authenticated !== null && (
        <>
          {authenticated.name === user && (
            <>
              {isEditing ? (
                <button onClick={handleEditSave}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Edit</button>
              )}

              <button onClick={handleDelete}>Delete</button>

              {status === "public" ? (
                <button onClick={handleStatusChange}>Make Private</button>
              ) : (
                <button onClick={handleStatusChange}>Make Public</button>
              )}

              <button onClick={handleToggleKnown}>
                {user === "" ? "Mark as Known" : "Mark as Unknown"}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
