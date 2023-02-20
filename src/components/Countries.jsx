import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import metadata from './metadata.json';
import { addCitiesAction } from "./store/citiesReducer"
import './Search.css'


const Countries = () => {
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const dispatch = useDispatch()
  const newArray = useSelector(state => state.cities.cities)
  const addCities = (city, region) => {
        const cities = {
            city,
            region
        }
    dispatch(addCitiesAction(cities))
}
const filteredCountries = metadata.filter(el => {
    return el.city.toLowerCase().includes(value.toLowerCase())
})
const itemClickHandler = (e) => {
    setValue("")
    setIsOpen(!isOpen)
    console.log(newArray)
    
}
const inputClickHandler = () => {
    setIsOpen(true) 
}
    return (
        <>
        <div>
            <div className="form">
                <form className="search__form">
                    <input
                        type="text"
                        placeholder="Введите название города"
                        className="search__input"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onClick={inputClickHandler}
                        />
                        <ul className="autocomplete">
                            {
                             isOpen && (value.length > 2)
                            ? filteredCountries.map((cities, index) => {
                              return (
                                
                                 <li
                                  className="autocomplete__item"
                                  onClick={itemClickHandler}
                                   key={index}
                                  >
                                        <div onClick={() => addCities(cities.city, cities.region)  }>
                                        {cities.city}, {cities.region}</div>
                                     </li>
                                    )
                                })
                             :null
                            }
                    </ul>
                </form>
            </div>
        </div>
       
        </>
    )
}

export default Countries;