import { useParams } from 'react-router-dom';
import {posts} from './PostData'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function PostDetails() {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));
  
    if (!post) {
      return <div>Post not found</div>;
    }
  return (
    <section className='w-smallSize sm:w-mainSize mx-auto py-[2rem]'>
        <div className='flex justify-center mb-[2rem]'>
            {post.img && <img src={post.img} alt="postImg" className="mb-4" />}
        </div>
        <div className='bg-white border-dashed border-[2px] border-black px-4 mt-[2rem]'>
            <div className="flex items-center justify-center gap-[.5rem] py-[1rem]">
                <BiSolidLeftArrow  className="text-[#fadc41] text-[1.5rem]"/>
                <h2 className="text-[2rem] font-bold ">{post.title} </h2>
                <BiSolidRightArrow className="text-[#fadc41] text-[1.5rem]"/>
            </div>
           {post.q1 && 
                <div className='bg-gray-100 border-dashed border-[2px] border-black px-4 my-[1rem]'>
                    <h3 className='text-[1.2rem] font-semibold mt-[.5rem]'>{post.q1}</h3>
                    <p className='text-[gray-700] mb-[1rem]'>{post.a1}</p>
                    <h3  className='text-[1.2rem] font-semibold mt-[.5rem]'>{post.q2}</h3>
                    <p className='text-[gray-700]  mb-[1rem]'>{post.a2}</p>
                </div>
            }
            <div>
                <p className='my-[.5rem] leading-8 text-[1.2rem]'>{post.disc1}</p>
                <h3 className='text-[1.2rem] font-bold mt-[1.5rem]'>-{post.tit1}</h3>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc2}</p>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc3}</p>
                <h3 className='text-[1.2rem] font-bold mt-[1.5rem]'>-{post.tit2}</h3>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc4}</p>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc5}</p>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc6}</p>
                <h3 className='text-[1.2rem] font-bold mt-[1.5rem]'>-{post.tit3}</h3>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc7}</p>
                <p className='my-[1rem] leading-8 text-[1.2rem]'>{post.disc8}</p>
               
            </div>
        </div>
    </section>
  )
}

export default PostDetails
