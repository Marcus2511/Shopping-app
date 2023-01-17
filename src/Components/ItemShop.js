import React, { useEffect, useState } from "react";
import classes from "./ItemShop.module.css";
import intro from "./Intro.jpg";
import NavShop from "./NavShop";
import Footer from "./Footer";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const ItemShop = () => {
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const url1 = "https://fakestoreapi.com/products/category/men's%20clothing";
  const url2 = "https://fakestoreapi.com/products/category/women's%20clothing";
  const url3 = "https://fakestoreapi.com/products/category/jewelery";
  const url4 = "https://fakestoreapi.com/products/category/electronics";
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const handleclick = (item) => {
    cart.push(item);
  };

  const getdata = async () => {
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    const men = [data1];

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    const woman = [data2];

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    const jewelery = [data3];

    const response4 = await fetch(url4);
    const data4 = await response4.json();
    const electronics = [data4];

    const clothes = men.concat(woman).concat(jewelery).concat(electronics);

    setItem(clothes);
    setShow(true);
  };

  useEffect(() => {
    getdata();
  });

  return (
    <div>
      <div className={classes.heading}>
        <NavShop />
      </div>
      <div className={classes.body}>
        <div className={classes.container}>
          <div className={classes["intro-image"]}>
            <img src={intro} alt=""></img>
          </div>
          <div className={classes["container-product"]}>
            <div className={classes.product}>
              <div className={classes.shopitem}>
                {show ? <Product data={item} /> : "NOT FOUND"}
              </div>
            </div>
          </div>
          <div className={classes.allproduct}>
            <button
              type="button"
              onClick={() => {
                navigate(`/Allproduct`);
              }}
            >
              See all product
            </button>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ItemShop;
