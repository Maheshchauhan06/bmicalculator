import React from "react";

const Cartitem = ({ data, key }) => {
  console.log(key);

  return (
    <tr className="details">
      <td>{data.name}</td>
      <td>{data.quantity}</td>
      <td>${(data.price * data.quantity).toFixed(2)}</td>
    </tr>
  );
};

export default Cartitem;
