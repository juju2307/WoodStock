
import './App.css';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Shop from './components/Shop.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="container">
      <Nav />
      <About />
      <Shop />
      <Team />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
