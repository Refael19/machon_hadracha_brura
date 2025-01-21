import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Articles from "./pages/Articles";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
