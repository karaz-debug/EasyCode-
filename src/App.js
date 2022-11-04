import './App.css';
import About from './screens/About';
import Footer from './screens/Footer';
import Header from './screens/Header';
import Hero from './screens/Hero';
import Languages from './screens/Languages';
import Project from './screens/Project';
import Services from './screens/Services';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Languages />
      <Project />
      <Footer />
    </div>
  );
}

export default App;




