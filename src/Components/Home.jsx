import Blogs from "./Blogs/Blogs";
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
