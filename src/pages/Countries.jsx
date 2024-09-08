import Card from '../components/Card'
import React, { useState, useEffect } from "react";
const url="https://restcountries.com/v3.1/all";
const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [length,setLength]=useState(0);
  // const navigate = useNavigate();
  const noCountries = countries.status || countries.message;



  // fetch the data form api
  let response = [];
  const fetchData = async () => {
    setLoading(true);
    response = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(setLoading(false));
      setLength(response.length)
    setCountries(response);
    // console.log(response);
  };


  useEffect(()=>{
    try{
      fetchData();
    }catch(err){
      console.log(err)
    }
  },[]);


  const handleSearch = (e) => {
    let name = e.target.value;
    name = name.replace(/[^A-Za-z]/g, "");
    if (name) {
      const fetchSearch = async () => {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const response = await fetchData.json();
        setLength(response.length)
        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    }
  };




  const handleRegion = (e) => {
    setLoading(true);
    const region = e.target.value;
    console.log(region);
    if(region==="All"){
      setLength(250);
    }
    if (region !== "All") {
      const fetchSearch = async () => {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const response = await fetchData.json().then(setLoading(false));
        console.log(response.length)
        setLength(response.length);
        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };


  
  return (
    <>
    <main className='countries'>
        <section className="search-filter grid grid-cols-1 md:grid-cols-2 p-5 my-3 md:my-0">
            <section className=" ">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" 
        className="block w-full p-4 ps-10 text-sm text-gray-950 placeholder-gray-800 border border-gray-500 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search countries..." required onChange={handleSearch} autoComplete='off'/>
    </div>
            </section>

            <form className="max-w-sm mx-auto my-3 md:my-0">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                  <select id="countries" onChange={handleRegion} className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Region</option>
                        <option value="All">All</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                  </select>
            </form>

            </section>
            <div className="length-countries text-black dark:text-gray-100 text-center my-1">
              <p className='text-2xl'>Countries : <span className='font-bold'>{length}</span></p>
            </div>

    {
      loading?(
        <main className="loading text-black dark:text-white text-5xl py-10 mx-auto">
        Loading . . .
      </main>):(
        <>
            <div className="search"></div>
            <div className="countries-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
              {!noCountries?(
                  countries.sort().map((item,index)=>(
                      <Card key={index} country={item}/>
                  ))
              ):(<p className='text-black dark:text-white text-3xl text-center'>No Countries Found</p>)}
            </div>
        </>
      )
    }
    </main>
    </>
  )
}

export default Countries