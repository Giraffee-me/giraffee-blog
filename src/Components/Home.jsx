import Blogs from "./Blogs/PostsContainer";
import HomeHeader from "./HomeHeader";



function Home() {
  return (
    <section className=" pt-[2rem]">
        <HomeHeader/>
        <Blogs/>
    </section>
  );
}

export default Home;
