import './App.css';
import AboutMe from './pages/LandingPage';
import { Contact } from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/Nav'
import { Route, Routes } from 'react-router-dom';
import Particle from "./components/Particle"
import './components/pdfconfig'
import '@react-pdf-viewer/core/lib/styles/index.css';



function App() {
  return (
    <>
     <Particle/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AboutMe/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
{/* <footer className='foot'>
  <p>
    2023 all right reserved Franklin Bradley
  </p>
</footer> */}


    
 
    
 
    </>
  );
}

export default App;
