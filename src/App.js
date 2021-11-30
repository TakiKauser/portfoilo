import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="text-white App bg-dark">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
