import { Link } from 'react-router-dom'
import {posts} from './PostData'

function Posts() {
  
  return (
    <section className="bg-white border-dashed border-[2px] border-black px-4 mt-[2rem]">
       {posts.map((post)=>{
        return (
            <article className="py-[2rem]" key={post.id}>
                <div className="flex justify-between items-center">
                    <Link to={`/blogs/${post.id}`} className="font-bold border-dashed border-b-[2px] border-b-black p-2 text-[1.2rem]">  {post.title}</Link>
                    <div className="text-[15px] text-gray-600">تاريخ النشر:{post.date} </div>
                </div>
                <p className="mt-[1rem] leading-9 text-[18px]">{post.content}</p>
            </article>
        )
       })}
       
      
    </section>
  )
}

export default Posts
