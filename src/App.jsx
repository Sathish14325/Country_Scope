import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Countries from './pages/Countries';
import PageNotFound from './pages/PageNotFound'
import CoutryDetails from './pages/CoutryDetails';
import DeveloperGuide from './pages/DeveloperGuide';


const App = () => {
  return (
    <>
    <div className='bg-white border-gray-200 dark:bg-gray-800'>
      <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<Countries/>}/>
            <Route path='/country/:countryName' element={<CoutryDetails/>}/>
            <Route path='/dev-guide' element={<DeveloperGuide/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div>
    </>
  )
}

export default App