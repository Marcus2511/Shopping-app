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
  const [cart, setCart] = useState([]);
  let navigate = useNavigate();

  const addtocart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, quty: exist.quty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, quty: 1 }]);
    }
  };

  const removetocart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      if (exist.quty === 1) {
        setCart(cart.filter((x) => x.id !== item.id));
      } else {
        setCart(
          cart.map((x) =>
            x.id === item.id ? { ...exist, quty: exist.quty - 1 } : x
          )
        );
      }
    }
  };

  const getproduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => (search ? setAllitem(getitem) : setAllitem(data)));
  };

  useEffect(() => {
    getproduct();
  }, [search]);

  const getitem =
    allitem &&
    allitem.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

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
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <Cart cart={cart} addtocart={addtocart} removetocart={removetocart} />
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
