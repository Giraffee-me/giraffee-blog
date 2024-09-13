import { Link } from 'react-router-dom'
import {posts} from './PostData'

function Posts() {
  
  return (
    <section className="bg-white border-dashed border-[2px] border-black px-4 mt-[2rem] pb-[1rem]">
       {posts.map((post)=>{
        return (
            <article className="py-[0.5rem] px-" key={post.id}>
                <div className="flex justify-between items-center">
                    <Link to={`/blogs/${post.id}`} className="font-bold border-dashed border-b-[2px] border-b-black py-2 text-[20px] text-start"> {post.title} </Link>
                    <div className="text-[14px] text-[#808080]">تاريخ النشر:{post.date} </div>
                </div>
                <p className="mt-[0.5rem] mr-4 leading-9 text-[18px]">{post.content}</p>
            </article>
        )
       })}
       
      
    </section>
  )
}

export default Posts
