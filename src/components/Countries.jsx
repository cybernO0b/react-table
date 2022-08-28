import React, { useState } from "react";
import metadata from './metadata.json';
import './Search.css'




const Countries = () => {
    
    
  const [cityList, setCity] = useState(metadata)
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const [newArray, setNewArray] = useState([])
  
  
const filteredCountries = cityList.filter(el => {
    return el.city.toLowerCase().includes(value.toLowerCase())
})
const itemClickHandler = () => {
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
                                        <div onClick={() =>{setValue(newArray.push(cities))}}>
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