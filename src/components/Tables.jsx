import React, { useMemo } from "react";
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

    const removeCities = (id) => {
      dispatch(removeCitiesAction(id));
    };
  
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
                  Cell: ({ value }) => <div>123</div>,
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
        id: "Delete",
        Header: "Delete",
        Cell: ({ row }) => (
          <Button onClick={() => removeCities(row.original.id)}>Delete</Button>
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
  } = tableInstance;



  const isEven = (idx) => idx % 2 === 0;
  
  return (
    <>
    
     
      
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