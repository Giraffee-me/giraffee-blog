import Posts from "./Posts";
import Title from "../Title";

function Blogs() {
  return (
    <section className="w-smallSize sm:w-mainSize mx-auto mt-[4rem]">
        <div className="flex justify-center ">
            <Title text="التدوينات" />
        </div>
        <Posts/>
    </section>
  )
}

export default Blogs
