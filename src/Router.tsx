import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Thanks from "./routes/Thanks/Thanks";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
}

export default Router;
