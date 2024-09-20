import { useEffect } from "react";
import ArticleTitle from "./ArticleTitle";
import articles from "./articles"
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Qute from "./Qute";
import { Helmet } from "react-helmet-async";


function Article() {

    const paragraph = (par, id) => {
        if (par.text.link.url) {
            return (
                    <p key={id} className="mb-4 text-[1.2rem] leading-8 px-3">{par.text.t1} <a href={par.text.link.url} key={id} target="blank" className="text-blue-400 hover:border-dashed  border-blue-400 hover:border-b-[2px]">{par.text.link.name}</a> {par.text.t2}</p>
            )
        }  
        else {
            return <p key={id} className="mb-4 text-[1.2rem] leading-8 px-3">{par.text.t1}</p>
        }
    }

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
            <Helmet>
                <title>{article.title}</title>
                <meta name="description" content={article.brief} />
            </Helmet>
            
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

                                    {/******** Paragraph Content ********/}
                                    
                                    {paragraph(par, id)}
                                    
                                </>
                            )
                            
                        })
                    }

                    {/******** Qute ********/}
 
                    <Qute qute={article.qute} />
                    
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