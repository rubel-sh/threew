import React from "react";
import { Table } from "reactstrap";

const HistoryTable = ({ selectedTable }) => {
  return (
    <Table bordered responsive style={{ maxWidth: "500px", marginTop: "15px" }}>
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
