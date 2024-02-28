import award from '../../assets/Netart-Test/asserts/1.png'
import logo from '../../assets/Netart-Test/asserts/logo.png'
import image from '../../assets/Netart-Test/asserts/2.png'
import './header.css'
function Header() {
  return (
    <div className='header-section grid grid-cols-1 md:grid-cols-9'>
        <div className=' col-span-3'>
            <img className='w-full' src={award} alt="" />
        </div>
        <div className='col-span-6'>
            <img className='w-full md:w-[500px] mb-8' src={logo} alt="" />
            <div>
                <h2 className='text-xl font-semibold mb-4'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                <ul className='ml-8'>
                    <li className=' list-disc font-serif mb-2'>
                        C.R.I.'s energy efficient products are well recognized by various
                         Government Institutions, as trustworthy products for various 
                         projects across the globe to save energy.
                    </li>
                    <li className='list-disc font-serif mb-2'>
                        C.R.I. is the highest contributor in the country for the projects
                         of EESL (Energy Efficiency Services Limited) to replace the old 
                         inefficient pumps with 5 Star rated energy efficient smart pumps 
                         with IoT enabled control panel. 
                    </li>
                </ul>
                <img src={image} alt="" />
                <h4 className='font-serif'>
                    Government of India has awarded the <strong>"National Energy Conservation
                     Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. 
                     Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
                      Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Header
