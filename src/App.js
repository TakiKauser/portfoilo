import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Navigation from './components/Shared/Navigation';

function App() {
  return (
    <div className="text-white App bg-dark">
      <Navigation />
      <Intro />
      <Contact />
    </div>
  );
}

export default App;
