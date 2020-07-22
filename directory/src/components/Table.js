import React from "react";
import Employees from "./Employees";


function Table({ headings, users, handleSort }) {
  return (
    <div className="table mt-5">
      <table
        className="table table-striped table-hover table-condensed"
        >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <Employees users={users} />
      </table>
    </div>
  );
}

export default Table;