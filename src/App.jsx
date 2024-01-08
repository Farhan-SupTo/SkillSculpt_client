
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/container/About";
import Contact from "./components/container/Contact";
import Courses from "./components/container/Course/Courses";
import Footer from "./components/container/Footer";
import Home from "./components/container/Home";
import Teacher from "./components/container/Teacher";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <div className="min-h-screen">
<Outlet></Outlet>
</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
