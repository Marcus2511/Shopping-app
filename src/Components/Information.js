import React from "react";
import NavShop from "./NavShop";
import classes from "./Information.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";
import image4 from "./4.svg";
import image5 from "./5.svg";
import image6 from "./6.svg";

const Information = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  if (id != "") {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }

  return (
    <div>
      <NavShop />
      {!item ? (
        ""
      ) : (
        <>
          <div className={classes["result-container"]}>
            <div className={classes["result-image"]}>
              <img src={item.image} alt=""></img>
            </div>
            <div className={classes["result-information"]}>
              <div>
                <h1>{item.title}</h1>
                <h3>Category: {item.category}</h3>
                <h3>{item.price} $</h3>
              </div>
              <div className={classes["result-description"]}>
                <h5>{item.description}</h5>
              </div>
              <div className={classes["result-size"]}>
                <h3>Size</h3>
                <div className={classes["result-box"]}>
                  <button className={classes.size} type="button">
                    S
                  </button>
                  <button className={classes.size} type="button">
                    M
                  </button>
                  <button className={classes.size} type="button">
                    L
                  </button>
                </div>
              </div>
              <div className={classes["result-UX"]}>
                <div>Count: {item.rating.count}</div>
              </div>
              <div className={classes["result-benefit"]}>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image1} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Bảo hành trọn đời <br /> trên toàn hệ thống
                  </div>
                </div>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image2} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Đổi trả trong 365 ngày <br /> nếu không hài lòng
                  </div>
                </div>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Hoàn tiền 30% nếu <br /> sản phẩm gặp lỗi
                  </div>
                </div>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image4} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Cam kết chính hãng
                  </div>
                </div>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image5} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Độc quyền phân phối
                  </div>
                </div>
                <div className={classes["result-wrap"]}>
                  <div>
                    <img src={image6} alt=""></img>
                  </div>
                  <div className={classes["result-privi"]}>
                    Thanh toán khi <br /> nhận hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
