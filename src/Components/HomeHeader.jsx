import Home from '../assets/images/Giraffee-Home.png';
import { FaXTwitter } from "react-icons/fa6";

function HomeHeader() {
  return (
    <div className="w-smallSize sm:w-mainSize mx-auto flex flex-col lg:flex-row gap-[1rem] items-center">
        <div className="h-[400px] w-full lg:w-[49%] border-dashed border-[4px] border-white flex flex-col justify-center items-center">
            <img src={Home} alt="giraffee" className="w-[300px] m-auto"/>
            <a href="https://x.com/iAattia" target="_blank">
                <FaXTwitter className="text-white text-3xl mb-3"/>
            </a>
        </div>
        <div className="w-full lg:w-[49%] text-center">
            <h2 className="text-[26px] font-bold text-center mb-[1rem] py-3">مدونة شخصية</h2>
            <h4 className="text-[18px] font-bold leading-9 mb-[1rem]">
                الكثير منا لا يُجيد الحديث لذلك يكون التـدوين طـوق النجـاة لتفريغ الأفكار المتزاحمة في أدمغتنا، وحتى إن كانت تلك الأفكار بسيطة قد يجدها أحدهم في هذا العالم الشاسع ذات قيمة.
            </h4>
            <p className="text-[18px] mb-[2rem]">يمكنك الإشتراك في القائمة البريدية ليصلك منشوراتنا</p>
            <div>
                <a href="https://gohodhod.com/@giraffee" target='_blank'
                to="/"
                className="font-bold bg-white px-[2rem] text-[24px] py-0.5 border-dashed border-[2px] border-white hover:border-black duration-200"
                >
                اشترك
                </a>
            </div>
        </div>
  </div>
  )
}

export default HomeHeader
