import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BiSolidPlanet } from "react-icons/bi";

function Footer() {
  return (
    <div className="py-12 px-5 bg-red-500">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between">
        <p className="flex justify-center mb-2 font-serif items-center text-white"><span className="font-bold text-3xl mr-2"><FaWhatsapp /></span>Toll Free: 1800 200 1234</p>
        <p className="flex justify-center mb-2 font-serif items-center text-white"><span className="font-bold text-3xl mr-2"><FaFacebook /></span>Toll Free: 1800 200 1234</p>
        <p className="flex justify-center mb-2 font-serif items-center text-white"><span className="font-bold text-3xl mr-2"><BiSolidPlanet /></span>Toll Free: 1800 200 1234</p>
      </div>
    </div>
  )
}

export default Footer
