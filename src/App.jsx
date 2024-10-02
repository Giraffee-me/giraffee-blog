import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/pages/home/Home";
import About from "./Components/pages/About";
import ContactUs from "./Components/pages/ContactUs";
import Footer from "./Components/Footer";
// import PostDetails from "./Components/Blogs/PostDetails";
import Todo from "./Components/pages/todo/Todo";
import Article from "./Components/pages/article/Article";
import NewArticle from "./Components/pages/NewArticle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/blogs/:id" element={<PostDetails />} /> */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/article/:url" element={<Article />} />
        <Route path="/newarticle" element={<NewArticle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
