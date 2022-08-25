// import React, { useMemo, useState, useEffect } from 'react';
// import { useGlobalFilter, useSortBy, useTable } from 'react-table';
// import metadata from './metadata.json';
// import { COLUMNS } from './columns';
// import './table.css';
// import { GlobalFilter } from './globalFilter';


// export const BasicTable = ( { onRemove }) => {
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     const [cityList, setCity] = useState(metadata)
//     const [value, setValue] = useState("")
//     const [isOpen, setIsOpen] = useState(true)
    
//   const filteredCountries = cityList.filter(el => {
//       return el.city.toLowerCase().includes(value.toLowerCase())
//   })                                                                           
//                                                                                                  //  search
//   const itemClickHandler = () => {
//       setValue("")
//       setIsOpen(!isOpen)
//   }
//   const inputClickHandler = () => {
//       setIsOpen(true) 
//   }
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const [cities, setCities] = useState([]);
//   const citiesData = useMemo(() => [...cities], [cities])

//   const citiesColumns = useMemo(() => cities[0] ? Object.keys(cities[0]).filter((key) => key !== "rating").map((key) => {
//     return {Header: key, accessor: key };
//   }) : [], [cities]) ;

  


// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     const columns = useMemo(() => COLUMNS, [])
//     const data = useMemo(() => metadata, [])

//     const tableInstance = useTable({
//         columns: citiesColumns,
//         data: citiesData
//     }, 
//     useSortBy,
//     useGlobalFilter,
//     )
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter, state } = tableInstance

//     // юююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю
//     return (
//         <>

//         <div>
//             <div className="form">
//                 <form className="search__form">
//                     <input
//                         type="text"
//                         placeholder="Введите название города"
//                         className="search__input"
//                         value={value}
//                         onChange={(event) => setValue(event.target.value)}
//                         onClick={inputClickHandler}
//                         />
//                         <ul className="autocomplete">
//                             {
//                              isOpen && (value.length > 2)
//                             ? filteredCountries.map((cities, index) => {
//                               return (
                                
//                                  <li
//                                   className="autocomplete__item"
//                                   onClick={itemClickHandler}
//                                   >
//                                      {cities.city} 
//                                      </li>
//                                     )
//                                 })
//                              :null
//                             }
//                     </ul>
//                 </form>
//             </div>
//         </div>
//     <GlobalFilter
//      preGlobalFilteredRows={preGlobalFilteredRows} 
//      setGlobalFilter={setGlobalFilter}
//      globalFilter={state.globalFilter}/>
//         <table {...getTableProps()}>
//             <thead>
//                 {
//                     headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {
//                                 headerGroup.headers.map((column) => (
//                                     <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
//                                     {column.isSorted ? (column.isSortedDesc ? " down" : " up") : ""}</th>
//                                 ))
//                             }
//                             <th></th>
//                         </tr>
//                     ))
//                 }
                
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {
//                     rows.map(row => {
//                         prepareRow(row)
//                         return (
//                             <tr
//                              {...row.getRowProps()} onClick={() => onRemove(row.values.id)}>
//                                 {
//                                     row.cells.map((cell, index) => {
//                                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

//                                     })
//                                 }
                            
//                         </tr>
//                         )
//                     })
//                 }
                
//             </tbody>
//         </table>
//         </>
//     )
// }