
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import PostDetails from './Components/Blogs/PostDetails';
import Todo from './Components/Todo';

function App() {
  return (
    <>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path="/blogs/:id" element={<PostDetails/>} />
                <Route path="/todo" element={<Todo />}/>
            </Routes>
        <Footer/>
    </>
  )
}

export default App
