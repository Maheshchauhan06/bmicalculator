import React, { useEffect, useState } from "react";
import "./App.css";
import Cartitem from "./Cartitem";

const App = () => {
  const [cartitem, setcartitem] = useState([]);
  const [totalvalue, settotalvalue] = useState(0);
  const [coinadd, setcoinadd] = useState(1);

  const coindata = [
    {
      id: 1,
      img: "https://i.ibb.co/3SMLrjs/bitcoin.png",
      name: "btc",
      price: 25000,
    },
    {
      id: 2,
      img: "https://i.ibb.co/WV5vNr2/dogecoin.png",
      name: "Doge",
      price: 0.07,
    },
    {
      id: 3,
      img: "https://i.ibb.co/ZMkV65r/ripple.png",
      name: "Ripple",
      price: 0.45,
    },
  ];

  // add item
  const additem = (item) => {
    const existingItemIndex = cartitem.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex >= 0) {
      const newCartItems = [...cartitem];
      newCartItems[existingItemIndex] = {
        ...newCartItems[existingItemIndex],
        quantity: newCartItems[existingItemIndex].quantity + 1,
      };
      setcartitem(newCartItems);
    } else {
      setcartitem([...cartitem, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartitem.length; i++) {
      total += cartitem[i].price * cartitem[i].quantity;
    }
    settotalvalue(total * coinadd);
  }, [cartitem]);

  const handleprice = (e) => {
    if (e.target.value === "") {
      setcoinadd(1);
    } else {
      setcoinadd(parseFloat(e.target.value));
    }
  };

  return (
    <div className="body">
      <div className="cart_box">
        {coindata.map((data) => {
          return (
            <div className="coin" key={data.id}>
              <img src={data.img} alt="net slow" />
              <h1>{data.name} </h1>
              <h3>${data.price} </h3>
              <input
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => handleprice(e)}
              />
              <button onClick={() => additem(data)}>add to cart</button>
            </div>
          );
        })}
      </div>

      <div className="cartitem_detail">
        <h2>My Cart</h2>
        {cartitem.map((data, i) => {
          return <Cartitem data={data} coinadd={coinadd} key={i} />;
        })}{" "}
        <h2> total value = ${totalvalue.toFixed(2)} </h2>
      </div>
    </div>
  );
};

export default App;
