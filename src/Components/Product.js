import React from "react";
import classes from "./Product.module.css";
import Slider from "react-slick";
import "./slider.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = (props) => {
  let navigate = useNavigate();
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
      <div className={classes["shop-bar"]} id="men">
        <h2>Men's Clothes</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {props.data[0].map((item) => (
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
      <div className={classes["shop-bar"]} id="women">
        <h2>Women's Clothes</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {props.data[1].map((item) => {
            return (
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
            );
          })}
        </Slider>
      </div>
      <div className={classes["shop-bar"]} id="jewelery">
        <h2>jewelery</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {props.data[2].map((item) => {
            return (
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
            );
          })}
        </Slider>
      </div>
      <div className={classes["shop-bar"]} id="electronic">
        <h2>Electronic</h2>
      </div>
      <div className={classes["product-container"]}>
        <Slider {...settings}>
          {props.data[3].map((item) => {
            return (
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
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
