import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/private-route";
import ProfilePage from "./pages/profile";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
