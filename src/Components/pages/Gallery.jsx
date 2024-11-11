import { useEffect, useState } from "react";
import {gallery} from "../data/galleryData.json"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { DiscussionEmbed } from "disqus-react";


const Gallery = () => {

    const [slide, setSlide] = useState(5);
    const [next, setNext] = useState(6);
    const [previous, setPrevious] = useState(4);

    const moveRight = ()=> {
        setSlide(slide + 1 >= gallery.length ? 0 : slide + 1)
        setPrevious(previous + 1 >= gallery.length ? 0 : previous + 1)
        setNext(next + 1 >= gallery.length ? 0 : next + 1)
    }

    const moveLeft = ()=> {
        setSlide(slide - 1 < 0 ? gallery.length -1 : slide - 1)
        setNext(next - 1 < 0 ? gallery.length -1 : next - 1)
        setPrevious(previous - 1 < 0 ? gallery.length -1 : previous - 1)
    }

    useEffect(()=>{
        window.scroll(0, 100)
    },[])


  return (
    <div className="my-16">
            <h1 className="mx-auto text-xl sm:text-3xl font-bold border-2 border-dashed border-black pt-4 pb-6 w-1/2 sm:w-mainSize flex justify-center bg-white">تصويري</h1>
        <div className='px-4 sm:px-[11vw] md:px[13vw] lg:px[15vw] flex justify-center bg-black my-16'>
            <div className='flex justify-center items-center w-96 relative'>
                <MdKeyboardArrowRight onClick={()=>moveLeft()} className="absolute text-4xl bg-primary border-dashed border-2 border-black -bottom-10 sm:bottom-auto right-3 sm:-right-16 cursor-pointer shadow-md z-10 active:right-1 active:sm:-right-20 transition-all"/>

                {
                    gallery.map((item, index) => {
                        return <img src={`/images/gallery/${item.src}.png`} alt={item.alt} key={index} className={previous === index? "hidden md:block w-2/3 opacity-40" : "hidden"}/>
                    })
                }

                {
                    gallery.map((item, index) => {
                        return <img src={`/images/gallery/${item.src}.png`} alt={item.alt} key={index} className={slide === index? "block mx-4" : "hidden"}/>
                    })
                }
                
                {
                    gallery.map((item, index) => {
                        return <img src={`/images/gallery/${item.src}.png`} alt={item.alt} key={index} className={next === index? "hidden md:block w-2/3 opacity-40" : "hidden"}/>
                    })
                }
                <MdKeyboardArrowLeft onClick={()=>moveRight()} className="absolute text-4xl bg-primary border-dashed border-2 border-black -bottom-10 sm:bottom-auto left-3 sm:-left-16 cursor-pointer shadow-md active:left-1 active:sm:-left-20 transition-all"/>
                <div className="flex absolute -bottom-20 sm:-bottom-8 justify-center items-center flex-wrap sm:flex-nowrap">
                    {
                        gallery.map((_, index) => {
                            return <button key={index} onClick={()=>setSlide(index)} className={`${slide === index ? "bg-white shadow-sm mx-1 cursor-pointer h-2 w-2 sm:h-4 sm:w-4 border-dashed border-2 border-black mb-2 sm:mb-0" : "bg-primary h-2 w-2 shadow-sm mx-1 cursor-pointer border-dashed border-2 border-black mb-2 sm:mb-0"}`}></button>
                        }) 
                    }
                </div>
            </div>
            
        </div>

        {/* ------- Comments ------- */}

        <DiscussionEmbed
            className="w-smallSize sm:w-mainSize mx-auto py-[2rem] bg-white border-dashed border-[2px] border-fontColor px-5 pt-8 pb-2"
            shortname='giraffee'
            config={
                {
                    url: "https://giraffee.me/gallery",
                    identifier: "my-gallery",
                    title: "gallery",
                    language: 'ar'
                }
            }
        />
    </div>
  )
}

export default Gallery