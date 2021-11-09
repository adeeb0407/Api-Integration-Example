import React, { useState } from "react";
import { Table, Button, FormControl, InputGroup } from "react-bootstrap";

function Overview({ apiData, getUserDetails }) {
  const [search, setsearch] = useState("");

  let handelChange = (e) => {
    const { value } = e.target;
    setsearch(value);
  };

  let searchArray = apiData.filter((filterItem) => {
    return filterItem.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="user-over-view">
      <h2>Todos</h2>
      <InputGroup className="mb-3 search-bar">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <FormControl
          placeholder="search by title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handelChange}
        />
      </InputGroup>
      <Table striped bordered hover variant="dark" className = 'my-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchArray.map((dataItem) => (
            <tr key={dataItem.id}>
              <td>{dataItem.id}</td>
              <td>{dataItem.title}</td>
              <td>{dataItem.completed.toString()}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => getUserDetails(dataItem.id)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Overview;
