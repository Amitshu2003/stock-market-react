import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" exact element={<Login />} />          
      <Route path="/dashboard" exact  element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
