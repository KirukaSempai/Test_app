import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserMessages from "./pages/Messages";
import ErrorPage from "./pages/Error";
import axios from "axios";

function App() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<UserMessages />} />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
