import './App.css';
import Blog from './components/sections/Blog';
import Footer from './components/sections/Footer';
import Navbar from "./components/sections/Navbar";
import Presentation from './components/sections/Presentation';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Blog />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
