import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";

function App() {
  return (
    <div>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
