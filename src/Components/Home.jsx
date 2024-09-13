import MyApps from "./MyApps";
import PostsContainer from "./Blogs/PostsContainer";
import HomeHeader from "./HomeHeader";

function Home() {
  return (
    <section className="pt-[2rem]">
        <HomeHeader/>
        <PostsContainer />
        <MyApps />
    </section>
  );
}

export default Home;
