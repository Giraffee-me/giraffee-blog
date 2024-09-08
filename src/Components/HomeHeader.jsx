import Home from '../assets/images/Giraffee-Home.png';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div className="w-smallSize sm:w-mainSize mx-auto flex flex-col lg:flex-row gap-[1rem] items-center">
        <div className="h-[400px] w-full lg:w-[49%] border-dashed border-[4px] border-white flex justify-center items-center">
            <img src={Home} alt="giraffee" className="w-[300px]" />
        </div>
        <div className="w-full lg:w-[49%] text-center">
            <h2 className="text-[1.5rem] font-bold text-center mb-[1rem]">مدونه شخصيه</h2>
            <h4 className="font-bold leading-9 mb-[2rem]">
                الكثير منا لا يُجيد الحديث لذلك يكون التـدوين طـوق النجـاة لتفريغ الأفكار المتزاحمة في أدمغتنا، وحتى إن كانت تلك الأفكار بسيطة قد يجدها أحدهم في هذا العالم الشاسع ذات قيمة.
            </h4>
            <p className="mb-[2rem]">يمكنك الإشتراك في القائمة البريدية ليصلك منشوراتنا</p>
            <div>
                <Link
                to="/"
                className="font-bold bg-white px-[1.5rem] text-[24px] py-1 border-dashed border-[2px] border-white hover:border-black duration-200"
                >
                اشترك
                </Link>
            </div>
        </div>
  </div>
  )
}

export default HomeHeader
