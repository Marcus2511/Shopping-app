import React from "react";
import classes from "./AllProduct.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.webp";
import Cart from "./Cart";

const AllProduct = () => {
  const [url, setUrl] = useState("https://fakestoreapi.com/products/");
  const [search, setSearch] = useState("");
  const [allitem, setAllitem] = useState();
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    cart.push(item)
    console.log(cart)
  };

  // const handlechange = (item, n)=>{
  //   const index=cart.indexOf(item);
  //   const arr=cart;
  //   arr[index].amount +=n;

  //   if(arr[index].amount ===0) arr[index].amount=1;
  //   setCart([...arr]);
  // }

  const getproduct = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAllitem(data);
  };

  useEffect(() => {
    getproduct();
  }, []);

  const indexSearch = (KB) => {
    if (KB.key === "Enter")
      setUrl(`https://fakestoreapi.com/products/${search}`);
  };

  return (
    <>
      <div className={classes.heading}>
        <img src={logo} alt=""></img>
        <button
          onClick={() => {
            navigate(`/`);
          }}
          className={classes.homebutton}
        >
          Home
        </button>

        <input
          type="search"
          placeholder="Enter product name"
          //   onChange={(e) => setsearch(e.target.value)}
          //   onKeyPress={indexSearch}
        ></input>
        <Cart cart={cart}/>
      </div>
      <div className={classes["allproduct-container"]}>
        {allitem &&
          allitem.map((item) => {
            return (
              <div className={classes["allproduct-card"]} key={item.id}>
                <div
                  className={classes["allproduct-image"]}
                  key={item.id}
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className={classes["allproduct-name"]}>
                  <h3>{item.title}</h3>
                </div>
                <div className={classes["allproduct-rating"]}></div>
                <div className={classes["allproduct-price"]}>
                  <h2>Price: {item.price} $</h2>
                </div>
                <div className={classes.addcart}>
                  <button onClick={() => addtocart(item)}>Add to cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllProduct;
