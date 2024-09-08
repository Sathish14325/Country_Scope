import React, { useState, useEffect } from 'react';
import { useParams,useNavigate, Link } from 'react-router-dom';


// const url="https://restcountries.com/v3.1/name/india"
const CoutryDetails = () => {

    const navigate = useNavigate();
    // const params = useParams();
    const {countryName} = useParams();
    const resultCountryName=countryName.slice(1)
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        official: "",
        flagImg: "",
        population: 0,
        region: "",
        subregion: "",
        capital: "",
        currencies: {},
        languages: [],
        borders: [],
        latlng:[],
        continents:"",
        area:0,
        demonyms:[],
        maps:"",
        timezones:"",
      });

    const url = "https://restcountries.com/v3.1/name/";

    useEffect(()=>{

            const fetchDetails=async ()=>{
                setLoading(true);
                const res=await fetch(`${url}${resultCountryName}`);
                const data=await res.json();
                setDetails({
                    ...details,
                    name: data[0].name.common,
                    official: data[0].name.official,
                    flagImg: data[0].flags.png,
                    population: data[0].population,
                    region: data[0].region,
                    subregion: data[0].subregion,
                    capital: data[0].capital,
                    currencies: data[0].currencies,
                    languages: data[0].languages,
                    borders: data[0].borders,
                    latlng:data[0].latlng,
                    continents:data[0].continents,
                    area:data[0].area,
                    demonyms:data[0].demonyms,
                    maps:data[0].maps,
                    timezones:data[0].timezones,
                  });
                  setLoading(false);
                console.log(data[0]);
            };
        fetchDetails();
    },[countryName]);


    let languages;
    languages = Object.values(details.languages);

    let borders = [];
    borders = details.borders;

    let currencies;
    currencies = Object.values(details.currencies);



  return (
    <>{
    loading?(
        <main className="loading text-black dark:text-white text-5xl py-10 text-center">Loading . . .</main>
    ):(<div className='container mx-auto py-10'>
    <div className='text-black dark:text-white text-center py-3'>
        <h1 className='text-4xl uppercase font-medium py-3'>{details.name}</h1>
        <div className="img w-80 mx-auto">
            <img width="100%" className="rounded-lg h-44" src={details.flagImg} />
        </div>
    </div> 

    <div className="container p-3">
        

<div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-gray-400 my-2">
            <thead className="text-xs text-gray-900 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Basic Informaation:</th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Common Name</th>
                    <td className="px-6 py-4">{details.name}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Official Name</th>
                    <td className="px-6 py-4">{details.official}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Capital</th>
                    <td className="px-6 py-4">{details.capital}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Region</th>
                    <td className="px-6 py-4">{details.region}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Subregion</th>
                    <td className="px-6 py-4">{details.subregion}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Population</th>
                    <td className="px-6 py-4">{details.population}</td>
                </tr>
            </tbody>
        </table>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-gray-400 my-2">
            <thead className="text-xs text-gray-900 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Geographical Information</th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">latlang</th>
                    <td className="px-6 py-4">{details.latlng[0]} , {details.latlng[1]}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Area</th>
                    <td className="px-6 py-4">{details.area} Sq.Km</td>
                </tr>
                {
                    borders?(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Borders</th>
                        <td className="px-6 py-4 flex flex-wrap">
                            {
                                borders!==undefined && borders.map((border,index)=>(
                                    <a href={`/country/:${border}`} key={index} className='underline px-2'>{border}</a>
                                ))
                            }
                        </td>
                    </tr>
                    ):(null)
                }
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Google Maps</th>
                    <td className="px-6 py-4">{<a href={details.maps.googleMaps} className='underline' target='_black'>Open in map</a>}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Timezones</th>
                    <td className="px-6 py-4">{details.timezones[0]}</td>
                </tr>
            </tbody>
        </table>


        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-gray-400">
            <thead className="text-xs text-gray-900 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Cultural and Linguistic Information:</th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Languages</th>
                    <td className="px-6 py-4">
                        {languages.map((lang,index)=>(
                            lang+`${index===lang.length-1?"":" , "}`
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>)}
    </>


  )
}

export default CoutryDetails