import Blogs from "./Blogs/Blogs";
import HomeHeader from "./HomeHeader";



function Home() {
  return (
    <div className="bg-primary py-[2rem]">
        <HomeHeader/>
        <Blogs/>
    </div>
  );
}

export default Home;
