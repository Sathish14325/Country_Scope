import React from 'react'

const DeveloperGuide = () => {
  return (
    <main>
        <div className="container mx-auto text-black dark:text-gray-100 p-5 m-5">
            <h1 className='text-4xl font-medium text-center'>This Project build with rescountries API + React.JS</h1>
            <p className='text-2xl text-center py-3'>You can clone this project with this repository</p>
            <div className="btns my-20 flex justify-center gap-20">
                <a href="https://restcountries.com/" className='text-2xl bg-gray-300 text-gray-950 px-3 py-1 rounded-lg hover:bg-pink-600 hover:text-gray-50 border-2 border-w'>API</a>
                <a href="https://github.com/Sathish14325?tab=repositories" className='text-2xl bg-gray-300 text-gray-950 px-3 py-1 rounded-lg hover:bg-pink-600 hover:text-gray-50 border-2 border-w'>Github</a>
            </div>
        </div>
    </main>
  )
}

export default DeveloperGuide