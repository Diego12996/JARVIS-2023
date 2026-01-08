import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import getUser from "./services";


function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => setUsers(data)).then(console.log)
      .catch(console.log);
  }, []);

  const usersOrderAge = users.sort(function(a, b){return a.dob.age - b.dob.age})

  function ListUsers() {
    return (
      <>
        <Table striped bordered responsive className="text-center align-middle w-auto mx-auto">
          <thead style={{backgroundColor: "#FFB6D9"}} className="text-nowrap" >
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            { usersOrderAge.map((user, index) => (
              <tr key={index} style={{backgroundColor: "#FF8A8A"}} className="text-nowrap">
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{ user.dob.age}</td>
                <td>{ user.gender }</td>
                <td>{ user.email }</td>
                <td>{ user.nat}</td>
                <td><img src={user.picture.thumbnail} alt="user" className="rounded-circle" /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }

  return (
    <>
      <Button
        style={{margin: "1rem"}}
        color="primary"
        href="https://randomuser.me/api/?results=25&format=csv&dl _"
        tag="a"
      >
        Download CSV
      </Button>
      <ListUsers />
    </>
  )
}

export default UsersTable;