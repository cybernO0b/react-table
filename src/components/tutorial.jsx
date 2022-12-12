import React, { useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";
import { removeCitiesAction } from "./store/citiesReducer";





const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border
border-green-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

    export function Tables() {
      const dispatch = useDispatch()
    
    const arr = useSelector(state => state.cities.cities)

    const removeCities = (cities) => {
      dispatch(removeCitiesAction(cities.id))
  }
      

      // const [arr, setArr] = useState([]) // здесь наверное должен быть массив newArray из Countries.jsx
  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Title",
        accessor: "title",
      },
    ],
    []
  );
  
  const citiesData = useMemo(() => [...arr], [arr]);

  const citiesColumns = useMemo(
    () =>
    arr[0]
        ? Object.keys(arr[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              if (key === "image")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => <img src={value} />,
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [arr]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ cities }) => (
          <Button onClick={() => console.log(cities)}>
            Delete
          </Button>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: citiesColumns,
      data: citiesData,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;



  const isEven = (idx) => idx % 2 === 0;
  
  return (
    <>
    
      {/* <GlobalFilter
       
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      /> */}
      
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <TableRow
                {...row.getRowProps()}
                className={isEven(idx) ? "bg-green-400 bg-opacity-30" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      
    </>
  );
}