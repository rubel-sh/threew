import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Container from "../components/Container";

const AdminDashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/getusers")
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(allUsers);
  return (
    <div>
      <Container>
        <h1>Dashboard</h1>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((u, i) => (
              <tr key={i}>
                <th scope="row">{++i}</th>
                <td>{u.Id}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdminDashboard;
