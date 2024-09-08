import React from 'react'
import { FaStarHalf } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="bg-gray-300 rounded-lg shadow-lg m-4 dark:bg-gray-900">
            <div className="w-full mx-auto text-black dark:text-white max-w-screen-xl p-4 flex items-cente justify-between">
            {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a to="/" className="hover:underline">Countries Info</a>. All Rights Reserved.</span> */}
            <p>© 2024 CountryScope</p>
            <div className='flex items-center'>
            <FaStarHalf />
            <p>Sathish</p>
            </div>
            </div>
        </footer>

  )
}

export default Footer