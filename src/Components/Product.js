import React from "react";
import classes from "./Product.module.css";
import Slider from "react-slick";
import "./slider.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = (props) => {
  // const [search, setSearch] = useState["men"];
  let clothes = [];
  let jewelery = [];
  let electronics = [];
  let navigate = useNavigate();

  const getitem = props.data.filter((item) =>
    item.category.toLowerCase().includes("clothing")
  );

  const getitem2 = props.data.filter((item) =>
    item.category.toLowerCase().includes("jewelery")
  );

  const getitem3 = props.data.filter((item) =>
    item.category.toLowerCase().includes("electronics")
  );

  clothes=[getitem]
  jewelery=[getitem2]
  electronics=[getitem3]
  const shop=clothes.concat(jewelery).concat(electronics)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.wrapping}>
      <div className={classes["shop-bar"]} id="clothes">
        <h2>Clothes</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {shop[0].map((item) => (
            <div className={classes["product-card"]}>
              <div
                className={classes["product-image"]}
                key={item.id}
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                <img src={item.image} alt="" />
              </div>
              <div className={classes["product-name"]}>
                <h3>{item.title}</h3>
              </div>
              <div className={classes["product-rating"]}>
                Rate: {item.rating.rate} - Count: {item.rating.count}
              </div>
              <div className={classes["product-price"]}>
                <h2>Price: {item.price} $</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes["shop-bar"]} id="jewelery">
        <h2>Jewelery</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {shop[1].map((item) => (
            <div className={classes["product-card"]}>
              <div
                className={classes["product-image"]}
                key={item.id}
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                <img src={item.image} alt="" />
              </div>
              <div className={classes["product-name"]}>
                <h3>{item.title}</h3>
              </div>
              <div className={classes["product-rating"]}>
                Rate: {item.rating.rate} - Count: {item.rating.count}
              </div>
              <div className={classes["product-price"]}>
                <h2>Price: {item.price} $</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes["shop-bar"]} id="electronic">
        <h2>Electronics</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {shop[2].map((item) => (
            <div className={classes["product-card"]}>
              <div
                className={classes["product-image"]}
                key={item.id}
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                <img src={item.image} alt="" />
              </div>
              <div className={classes["product-name"]}>
                <h3>{item.title}</h3>
              </div>
              <div className={classes["product-rating"]}>
                Rate: {item.rating.rate} - Count: {item.rating.count}
              </div>
              <div className={classes["product-price"]}>
                <h2>Price: {item.price} $</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
