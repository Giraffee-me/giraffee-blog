import mailPhoto from '../assets/images/mail-white.png'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function ContactUs() {
  return (
    <section className=" pt-[3rem]">
        <div className="w-smallSize sm:w-mainSize mx-auto">
            <div className=' mb-[2.5rem] sm:w-[500px] mx-auto flex justify-center'>
                <img src={mailPhoto} alt="aboutPhoto" className='w-10/12'/>
            </div>
            <div className='bg-white border-dashed border-[2px] border-black px-[1rem] py-[2rem] mt-[2rem]'>
                <div className="flex justify-center mb-[1rem]">
                    <div className="flex items-center gap-[.5rem] ">
                        <BiSolidLeftArrow  className="text-primary text-[1.5rem]"/>
                            <h2 className="text-[1.3rem] font-bold ">يسعدني تواصلك معي عبر البريد الإلكتروني </h2>
                        <BiSolidRightArrow className="text-primary text-[1.5rem]"/>
                    </div>
                </div>
                <p className='text-[1.2rem] text-center'> giraffee.me@gmail.com</p>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
