import React from 'react'
import { TfiFaceSad } from "react-icons/tfi";

const PageNotFound = () => {
  return (
    <main>
      <div className='text-gray-600 flex justify-center items-center h-80 dark:text-white flex-col my-10'>
        <TfiFaceSad size={"90px"} />
        <h1 className='text-gray-600 dark:text-white text-9xl font-bold'>404</h1>
        <h1 className='text-3xl font-bold'>Page Not Found</h1>
        
      </div>
    </main>
  )
}

export default PageNotFound