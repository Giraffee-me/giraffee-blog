import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="w-1/2 items-center sm:items-stretch sm:w-mainSize sm:h-96 bg-white bg-cover bg-no-repeat gap-8 flex flex-col sm:flex-row sm:flex-nowrap mx-auto mt-24 border-dashed border-[2px] border-brownG justify-center">
      <img
        src="/images/giraffee-wearing-suit.png"
        alt="Giraffe Wearing a Suit"
        className="w-1/2 sm:w-auto"
      />
      <div className="w-3/4 sm:w-1/2 text-center my-auto">
        <h1 className="text-4xl sm:text-8xl mb-4 font-bold text-brownG">404</h1>
        <h2 className="text-xl sm:text-4xl mb-8 text-brwonG">لا نعلم أين تلك الصفحة!</h2>
        <button className="bg-primary px-2 sm:px-[1rem] text-brownG font-bold py-[.5rem] hover:border-dashed border-[2px] border-transparent hover:border-brownG duration-200 mb-3 sm:mb-0">
          <Link to="/">الصفحة الرئيسية</Link>
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
