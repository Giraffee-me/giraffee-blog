import MyApps from "./MyApps";
import HomeHeader from "./HomeHeader";
import BlogsContainer from "./BlogsContainer";

function Home() {
  return (
    <section className="pt-[2rem]">
      <HomeHeader />
      <BlogsContainer />
      <MyApps />
    </section>
  );
}

export default Home;
