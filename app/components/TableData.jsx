import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const TableData = ({ tableHeaderColumns, tableBodyRows }) => {
  return (
    <Table isStriped aria-label="Recent Transactions table" shadow="lg">
      <TableHeader>
        {tableHeaderColumns.map((headerColumn, index) => (
          <TableColumn
            key={index}
            className="font-semibold text-base max-sm:text-sm text-black bg-gray-300"
          >
            {headerColumn}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {tableBodyRows.map((bodyRow, index) => (
          <TableRow key={index}>
            {bodyRow?.values?.map((bodyCell, index) => (
              <TableCell
                key={index}
                className="font-medium text-base max-sm:text-sm text-black"
              >
                {bodyCell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;

{
  /* <table className="border border-gray-700 w-full border-collapse">
  <thead>
    <tr className="text-left">
      <th className="p-2 border border-gray-500">Currency</th>
      <th className="p-2 border border-gray-500">Quantity</th>
      <th className="p-2 border border-gray-500">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-left">
      <td className="p-2 border border-gray-500">BNB</td>
      <td className="p-2 border border-gray-500">0.1</td>
      <td className="p-2 border border-gray-500">100$</td>
    </tr>
    <tr className="text-left">
      <td className="p-2 border border-gray-500">USDT</td>
      <td className="p-2 border border-gray-500">100</td>
      <td className="p-2 border border-gray-500">100$</td>
    </tr>
  </tbody>
</table>; */
}
