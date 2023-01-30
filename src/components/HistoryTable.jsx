import React from "react";
import { Table } from "./StyledComponents";

const HistoryTable = ({ selectedTable }) => {
  console.log(selectedTable);
  return (
    <Table>
      <thead>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        {selectedTable?.data?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{++index}</th>
            <td>{data.time}</td>
            <td>{data.amount}</td>
            <td>{data.hash}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HistoryTable;
