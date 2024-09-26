import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Awards from "./components/Awards";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="bg-orange-600 text-white w-full md:w-1/4 p-6">
          <h1 className="text-4xl font-bold mb-4">LOREM IPSUM</h1>
          <p className="mb-2">+62-0123456789</p>
          <p className="mb-6">loremipsum@gmail.com</p>

          <nav>
            <ul className="space-y-4">
              <li>
                <Link className="hover:text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/interest">
                  Interest
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/awards">
                  Awards
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="interest" element={<Interest />} />
            <Route path="awards" element={<Awards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
