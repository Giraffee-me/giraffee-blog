
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
        <Navbar/>
 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
            </Routes>
     
    </>
  )
}

export default App
