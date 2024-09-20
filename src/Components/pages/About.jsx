import { Helmet } from 'react-helmet-async';
import aboutImg from '../../../public/images/about-giraffee.png'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function About() {
  return (
    <section className="pt-[3rem]">
      <div className="w-smallSize sm:w-mainSize mx-auto">
          <div className=' mb-2 sm:w-[500px] mx-auto flex justify-center'>
              <img src={aboutImg} alt="Giraffee ID 'Pixel Design'" className='w-10/12'/>
          </div>
      <div className='bg-white border-dashed border-[2px] border-black px-[1rem] py-[2rem] mt-[2rem]'>
          <div className="flex justify-center mb-[1rem]">
              <div className="flex items-center gap-[.5rem] ">
                  <BiSolidLeftArrow  className="text-primary text-[1.5rem]"/>
                  <h2 className="text-[1.5rem] font-bold ">زرافة</h2>
                  <BiSolidRightArrow className="text-primary text-[1.5rem]"/>
              </div>
          </div>
          <p className='text-[1.2rem]'>هي مدونة شخصية أسرد بها بعض الأفكار البسيطة التي تجول في خاطري سعياً لتفريغ بعض الطاقة وأملاً في تنظيم أفكاري وتطوير بعض المهارات مثل لغتي العربية والبرمجة…</p>
      </div>
      </div>
      <Helmet>
          <title>عن زرافة</title>
          <meta name="description" content="هي مدونة شخصية أسرد بها بعض الأفكار البسيطة التي تجول في خاطري..."/>
      </Helmet>
    </section>
  )
}

export default About
