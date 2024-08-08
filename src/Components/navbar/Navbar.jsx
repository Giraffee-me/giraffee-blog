import { Link } from 'react-router-dom'
import logo from '../../assets/giraffee-logo.png'

function Navbar() {
  return (
    <div className='bg-primary w-full'>
        <div className='w-mainSize mx-auto py-2 flex justify-between items-center'>
            <div className='w-[80px]'>
                <img src={logo} alt="logo" className='w-full'/>
            </div>
            <ul className='flex gap-[2rem] items-center text-[20px]'>
                <li className='bg-white px-[1rem] py-[.5rem] border-dashed border-[2px] border-white hover:border-black duration-200' >
                    <Link to="/">التدوينات </Link>
                </li>
                <li>
                    <Link to='/about' >عن زرافه</Link>
                </li>
                <li>
                    <Link to='/contact-us'>اتصل بي</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
