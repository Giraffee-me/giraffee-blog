import { useEffect } from "react";
import ArticleTitle from "./ArticleTitle";
import articles from "./articles"
import { useParams } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import Comments from "./Comments";


function Article() {

    // To Start show the page form the Top
    useEffect (() => {
        window.scrollTo(0, 0);
    },[]);

    const { url } = useParams();
    const article = articles.find((article) => article.url === url);
  
    if (!article) {
      return <div>Post not found</div>;
    }

    return(
        <>
            <section className='w-smallSize sm:w-mainSize mx-auto py-[2rem]'>

                {/******** Image ********/}

                <div className='flex justify-center mb-[2rem]'>
                    <img src={article.image} alt={article.title} className="mb-4" />
                </div>

                {/******** Article Text ********/}

                <div className='bg-white border-dashed border-[2px] border-fontColor px-5 mt-[2rem] pt-8 pb-2'>

                    {/******** Title ********/}

                    <ArticleTitle text={article.title}/>

                    {/******** Paragraphs ********/}

                    {
                        article.paragraphs.map((par, id) => {
                            return(
                                <>
                                    {
                                        par.title? <h3 key={id} className="font-bold text-[1.2rem] mt-6 mb-1">- {par.title}</h3> : null
                                    }

                                    {
                                        par.text? <p key={id} className="mb-4 text-[1.2rem] leading-8 px-3">{par.text}</p> : null
                                    }
                                </>
                            )
                            
                        })
                    }

                {/******** Qute ********/}

                    {
                        article.qute? <p className="bg-[#eee] text-[1.2rem] leading-8 mb-4 p-4 border-dashed border-[2px] border-fontColor">{article.qute}</p> : null
                    }

                </div>

                {/******** Article Data ********/}
                
                <p className="text-left text-sm mt-1">تاريخ النشر: {article.date}</p>

            </section>
            
            {/******** Commentes ********/}

            <Comments articleUrl={article.url} articleTitle={article.title}/>

        </>
    )
}

export default Article;