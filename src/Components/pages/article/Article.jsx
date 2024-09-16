import ArticleTitle from "./ArticleTitle";
import articles from "./articles"


let article = {};

function getArticle () {
    articles.map((thisArticle) => {
        if (thisArticle.id === 1){
            article = thisArticle;
        }
    })
}

function Article() {

    getArticle();

    return(
        <section className='w-smallSize sm:w-mainSize mx-auto py-[2rem]'>

            {/******** Image ********/}

            <div className='flex justify-center mb-[2rem]'>
                <img src={article.image} alt={article.title} className="mb-4" />
            </div>

            {/******** Article Text ********/}

            <div className='bg-white border-dashed border-[2px] border-black px-5 mt-[2rem] pt-8 pb-2'>

                {/******** Title ********/}

                <ArticleTitle text={article.title}/>

                {/******** Paragraphs ********/}

                {
                    article.paragraphs.map((par, id) => {
                        return(
                            <>
                                {
                                    par.title? <h3 key={id} className="font-bold text-[1.2rem] mt-6">- {par.title}</h3> : null
                                }

                                {
                                    par.text? <p key={id} className="my-4 text-[1.2rem] leading-8 px-3">{par.text}</p> : null
                                }
                            </>
                        )
                        
                    })
                }

            </div>

            {/******** Article Data ********/}
            
            <p className="text-left text-sm mt-1">تاريخ النشر: {article.date}</p>

        </section>
    )
}

export default Article;