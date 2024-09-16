import { Link } from "react-router-dom";
import Application from "./Application";
import Title from "../../Title";

function MyApps() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <Title text="تطبيقات" />
      <div className="my-10 grid grid-cols-2 w-mainSize gap-10 px-3">
        <Link to="/todo">
          <Application text="قائمة المهام" />
        </Link>
        <Application text="الطقس اليوم" />
        <Application text="تسجيل الدخول" />
        <Application text="المزيد . . ." />
      </div>
    </div>
  );
}

export default MyApps;
