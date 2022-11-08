import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import ContactForm from "./pages/ContactForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import AuthContext from "./context/auth-context";
import HistoryTable from "./pages/HistoryTable";
import ItemForm from "./pages/ItemForm";

function App() {
  const auth = useContext(AuthContext);
  return !auth.isLoggedIn ? (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={false} />
        <Routes>
        <Route path="/history" element={<HistoryTable />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<ItemForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={true} />
        <Routes>
          <Route path="/history" element={<HistoryTable />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<ItemForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
