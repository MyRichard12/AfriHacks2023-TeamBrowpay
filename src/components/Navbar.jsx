import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className='text-[25px] sm:text-[30px] font-bold'><Link to="/">Sales-AI&trade;</Link></h1>

      <div className='flex gap-5 items-center'>
        <ul className="text-[20px] list-none sm:flex justify-end items-center flex-1 gap-10 text-black">
          <Link to="/sales">Start Sales</Link>
        </ul>
        <Link to='/login' className="px-6 py-2 rounded text-[18px] bg-blue-400 shadow-md hover:bg-yellow-400">Login</Link>
      </div>
    </nav>


  )
}

export default Navbar;