import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPost />} />
            <Route path="/*" element={<BlogList />} />{" "}
            {/* This is a catch-all route */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
