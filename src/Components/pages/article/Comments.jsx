import { DiscussionEmbed } from "disqus-react";

function Comments ({articleUrl, articleTitle}) {
    return (
        <DiscussionEmbed
            className="w-smallSize sm:w-mainSize mx-auto py-[2rem] bg-white border-dashed border-[2px] border-fontColor px-5 pt-8 pb-2"
            shortname='giraffee'
            config={
                {
                    url: `https//giraffee.me/article/${articleUrl}`,
                    identifier: `article-${articleUrl}`,
                    title: articleTitle,
                    language: 'ar'
                }
            }
        />
    )
}

export default Comments;