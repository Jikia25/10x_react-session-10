import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Users from "./components/pages/Users";
import UserDetails from "./components/pages/UserDetails";
function App() {
  return (
    <>
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"about"}>about</NavLink>
      <NavLink to={"contact"}>contact</NavLink>
      <NavLink to={"users"}>users</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
