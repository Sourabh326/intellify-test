import React from "react";
import Typography from "@mui/material/Typography";

const CustomerList = ({ customers }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Remarks</th>
          <th scope="col">Reference</th>
        </tr>
      </thead>
      <tbody>
        {customers.length > 0 ? (
          customers.map((customer, i) => {
            return (
              <tr key={i}>
                <td> {customer.firstName} </td>
                <td> {customer.lastName} </td>
                <td> {customer.remarks} </td>
                <td> {customer.reference} </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colspan="4">
              <Typography textAlign="center">No Data</Typography>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CustomerList;
