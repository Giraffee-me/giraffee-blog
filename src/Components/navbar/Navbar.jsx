import { Link } from 'react-router-dom'
import logo from '../../assets/giraffee-logo.png'

function Navbar() {

    function goBlogs () {
        window.scrollBy({
            top: 550,
            left: 0,
            behavior: "smooth",
          });          
    }

  return (
    <header className='w-full'>
        <div className='w-smallSize sm:w-mainSize mx-auto py-2 flex gap-2 justify-between items-center'>
            <div className='w-[60px] sm:w-[80px]'>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-full'/>
                </Link>
            </div>
            <ul className='flex gap-[.5rem] sm:gap-[2rem] items-center text-[15px] sm:text-[20px]'>
                <li className='bg-white px-[1rem] py-[.5rem] border-dashed border-[2px] border-white hover:border-black duration-200' >
                    <Link onClick={goBlogs} to="/">التدوينات</Link>
                </li>
                <li>
                    <Link to='/about'>عن زرافة</Link>
                </li>
                <li>
                    <Link to='/contact-us'>اتصل بي</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar
