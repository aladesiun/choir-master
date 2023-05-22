import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const user = JSON.parse(localStorage.getItem('user') ?? "null");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <div>
        
<footer className="bg-white shadow dark:bg-gray-800 right-0 left-0 bottom-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">ChoirMaster</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className='cursor-pointer'>
                    <Link to='/' className="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                {

                    user ? <li className='cursor-pointer'>
                    <span to=''  onClick={logOut}   className="mr-4 hover:underline md:mr-6">Logout</span>
                </li>:
                <li className='cursor-pointer'>
                    <Link to='/login'  onClick={logOut}   className="mr-4 hover:underline md:mr-6">Login</Link>
                </li>
                }
               
                
                <li className='cursor-pointer'>
                    <Link to='/song/create' className="mr-4 hover:underline md:mr-6 ">Create song</Link>
                </li>
             
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' className="hover:underline uppercase">ChoirMaster™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer