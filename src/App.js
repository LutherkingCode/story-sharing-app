import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Stories from "./pages/stories";
import About from "./pages/about";
import Layout from "./pages/layout";
import AddStory from "./pages/create-new-story";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/add-new" element={<AddStory/>} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
