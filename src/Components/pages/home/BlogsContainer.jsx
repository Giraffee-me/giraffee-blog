import Title from "../../Title";
import Blogs from "./Blogs";

function BlogsContainer () {
  return (
    <section className="w-smallSize sm:w-mainSize mx-auto mt-[4rem]">
        <div className="flex justify-center ">
            <Title text="التدوينات" />
        </div>
        <Blogs />
    </section>
  )
}

export default BlogsContainer;
