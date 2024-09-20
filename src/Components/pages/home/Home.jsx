import MyApps from "./MyApps";
import HomeHeader from "./HomeHeader";
import BlogsContainer from "./BlogsContainer";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <section className="pt-[2rem]">
      <HomeHeader />
      <BlogsContainer />
      <MyApps />
      <Helmet>
          <title>مدونة زرافة</title>
          <meta name="description" content="الكثير منا لا يُجيد الحديث لذلك يكون التـدوين طـوق النجـاة لتفريغ الأفكار المتزاحمة في أدمغتنا، وحتى إن كانت تلك الأفكار بسيطة قد يجدها أحدهم في هذا العالم الشاسع ذات قيمة."/>
      </Helmet>
    </section>
  );
}

export default Home;
