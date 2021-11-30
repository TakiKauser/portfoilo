import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="text-white App bg-dark">
      <Navigation />
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
