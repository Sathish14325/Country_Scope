import React from 'react'
import { Link } from 'react-router-dom'
// import IndiaFlag from '../assets/IndiaFlag'
const Card = ({country}) => {
  return (

    <div className="container card mx-auto max-w-sm dark:text-white border-2 rounded-lg shadow-1g dark:bg-gray-800 dark:border-gray-300 hover:animate-shake">
        <a href="#">
            <img width="100%" className="rounded-t-lg h-44" src={country.flags.png} alt={country.flags.alt} />
        </a>
        <div className="p-5">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{country.name.common}</h5>
            <ul className='text-black dark:text-white leading-8 mb-2'>
                <li><span className='font-bold'>Region :</span> {country.region}</li>
                <li><span className='font-bold'>Capital : </span>{country.name.official}</li>
                <li><span className='font-bold'>Population : </span>{country.population}</li>
            </ul>
            <Link to={`/country/:${country.name.common}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More info
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>

  )
}

export default Card