import { Link } from "react-router-dom"
import articles from "../article/articles"

function Blogs () {
  
  return (
    <section className="bg-white border-dashed border-[2px] border-black px-4 mt-[2rem] pb-[1rem]">
       {articles.map((article, index)=>{
        return (
            <article className="py-[0.5rem] px-" key={article.id}>
                <div className="flex justify-between items-center">
                    <Link to={`/article/${article.url}`} className="font-bold border-dashed border-b-[2px] border-b-black py-2 text-[20px] text-start"> {article.title} </Link>
                    <div className="text-[14px] text-[#808080]">تاريخ النشر:{article.date} </div>
                </div>
                <p className="mt-[0.5rem] mr-4 leading-9 text-[18px]">{article.brief}</p>
                {
                  index + 1 < articles.length? <hr className="mt-2"/> : null
                }
            </article>
        )
       })}
       
      
    </section>
  )
}

export default Blogs;
