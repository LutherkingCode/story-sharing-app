import React, { useState } from "react";
import { AuthentificationContext, StoriesContext } from "./authentification";
import App from "../App";

const AppProvider = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [listStories, setListStories] = useState([]);

  return (
    <AuthentificationContext.Provider
      value={{ authenticated, setAuthenticated }}
    >
      <StoriesContext.Provider value={{ listStories, setListStories }}>
        <App />
      </StoriesContext.Provider>
    </AuthentificationContext.Provider>
  );
};

export default AppProvider;
