import { HashRouter, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
function App() {
  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPost />} />
            <Route path="/*" element={<BlogList />} />{" "}
            {/* This is a catch-all route */}
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
