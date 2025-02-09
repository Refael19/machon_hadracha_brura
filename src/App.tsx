import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Articles from "./pages/Articles";
import Layout from "./components/Layout";
import Management from "./pages/management/Management";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/management" element={<Management />} />
            <Route path="/login" element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
