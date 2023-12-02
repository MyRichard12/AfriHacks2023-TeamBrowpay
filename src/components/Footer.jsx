import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='flex flex-wrap justify-between w-full '>
      <div className='flex flex-wrap items-center'>
      <span className="text-md md:text-2xl font-semibold mr-1">MySeller.ai {` `}</span>
      <span className="text-md md:text-md font-light"> by Browpay Technologies Limited </span>
      </div>

      <div className='text-[30px] flex gap-10'>
        <Link><FaGithub /></Link>
        <Link><FaFacebook /></Link>
        <Link><FaLinkedin /></Link>
      </div>
    </div>
  )
}

export default Footer;