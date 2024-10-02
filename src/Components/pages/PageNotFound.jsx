import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="w-mainSize h-96 bg-white bg-cover bg-no-repeat gap-8 flex flex-wrap md:flex-nowrap mx-auto mt-24 border-dashed border-[2px] border-brownG justify-center">
      <img
        src="/images/giraffee-wearing-suit.png"
        alt="Giraffe Wearing a Suit"
        className=""
      />
      <div className="w-1/2 text-center my-auto">
        <h1 className="text-8xl mb-4 font-bold text-brownG">404</h1>
        <h2 className="text-4xl mb-8 text-brwonG">لا نعلم أين تلك الصفحة!</h2>
        <button className="bg-primary px-[1rem] text-brownG font-bold py-[.5rem] hover:border-dashed border-[2px] border-transparent hover:border-brownG duration-200">
          <Link to="/">الصفحة الرئيسية</Link>
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
