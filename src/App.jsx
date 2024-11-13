import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/pages/home/Home";
import About from "./Components/pages/About";
import ContactUs from "./Components/pages/ContactUs";
import Footer from "./Components/Footer";
import Todo from "./Components/pages/todo/Todo";
import Article from "./Components/pages/article/Article";
import NewArticle from "./Components/pages/NewArticle";
import PageNotFound from "./Components/pages/PageNotFound";
import Gallery from "./Components/pages/Gallery";
import Weather from "./Components/pages/Weather";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/article/:url" element={<Article />} />
        <Route path="/newarticle" element={<NewArticle />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
