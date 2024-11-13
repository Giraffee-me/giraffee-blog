import { Link } from "react-router-dom";
import Application from "./Application";
import Title from "../../Title";

function MyApps() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <Title text="تطبيقات" />
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 sm:w-mainSize gap-10 px-3">
        <Link to="/todo">
          <Application text="قائمة المهام" />
        </Link>
        <Link to="/gallery">
          <Application text="تصويري" />
        </Link>
        <a href="https://shop.giraffee.me" target="blank">
          <Application text="متجرنــــــا" />
        </a>
        <Link to="/weather">
          <Application text="حالة الطقس اليوم" />
        </Link>
        <Application text="تسجيل الدخول" />
        <Application text="المزيد . . ." />
      </div>
    </div>
  );
}

export default MyApps;
