import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About'; 
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className=' bg-gray-900'>
      <Header/>
      <Intro/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer />
  </div>
  );
};

export default App;
