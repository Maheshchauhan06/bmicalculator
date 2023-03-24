import React from "react";

const Cartitem = ({ data, coinadd }) => {
  return (
    <div>
      <div className="cart_details">
        <th>
          {" "}
          <tbody>
            <tr className="details">
              <th> {data.name} </th> <th> {data.quantity} </th>{" "}
              <td>${data.price}</td>
            </tr>
          </tbody>
        </th>
      </div>
    </div>
  );
};

export default Cartitem;
