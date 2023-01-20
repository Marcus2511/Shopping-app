import React, { useEffect, useState } from "react";
import classes from "./ItemShop.module.css";
import intro from "./Intro.jpg";
import NavShop from "./NavShop";
import Footer from "./Footer";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";

const ItemShop = () => {
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const url1 = "https://fakestoreapi.com/products/";
  let navigate = useNavigate();

  const getdata = async () => {
    const response1 = await fetch(url1);
    const data1 = await response1.json();

    setItem(data1);
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
          <div>
            <UncontrolledCarousel
              className={classes["intro-image"]}
              items={[
                {
                  altText: "Slide 1",
                  caption: "Slide 1",
                  key: 1,
                  src: "https://media.istockphoto.com/id/1330548216/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-th%E1%BB%A3-may-cao-c%E1%BA%A5p-ch%C3%A2u-%C3%A1-trung-qu%E1%BB%91c-v%E1%BB%9Bi-m%C3%A1i-t%C3%B3c-nh%C3%ACn-v%C3%A0o-m%C3%A1y-%E1%BA%A3nh-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-trong.jpg?s=612x612&w=0&k=20&c=ByWbmkByh6jw4oIDsVSV5WiCUfq2PnXBQdsEBwkdJH8=",

                },
                {
                  altText: "Slide 2",
                  caption: "Slide 2",
                  key: 2,
                  src: "https://media.istockphoto.com/id/1293366109/vi/anh/tr%E1%BA%ADn-%C4%91%E1%BA%A5u-n%C3%A0y-ho%C3%A0n-h%E1%BA%A3o-v%E1%BB%9Bi-t%C3%B4i.jpg?s=612x612&w=0&k=20&c=ty1nI42jiwRWf2vpyQzQ-HPmmbsJ8PZYnwLtn4SPm3s=",
                },
                {
                  altText: "Slide 3",
                  caption: "Slide 3",
                  key: 3,
                  src: "https://media.istockphoto.com/id/1301194623/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-trung-qu%E1%BB%91c-ch%C3%A2u-%C3%A1-c%E1%BA%A7m-%C3%A1o-s%C6%A1-mi-menswear-t%E1%BA%A1i-c%E1%BB%ADa-h%C3%A0ng-qu%E1%BA%A7n-%C3%A1o-ch%E1%BB%8Dn-%C4%91%C3%BAng-m%E1%BB%99t-mua-s%E1%BA%AFm.jpg?s=612x612&w=0&k=20&c=fFpFW_ekwxK8CWjw3xbNU3Cy5MhE2sv3nG96IyqlxI4=",
                },
              ]}
            />
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
