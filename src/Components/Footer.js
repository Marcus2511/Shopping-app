import React from "react";
import classes from "./Footer.module.css";
import warranty from "./warranty.svg";
import auth from "./auth.svg";
import return1 from "./return1.svg";
import cashback from "./cashback.svg";
import certificate1 from "./certificate1.png"
import certificate2 from "./certificate2.png"
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className={classes.benefit}>
        <div className={classes.benefit1}>
          <img src={warranty} alt="" />
          <div className={classes.policy}>
            <h6>Bảo hành trọn đời</h6>
            <p>Trên toàn hệ thống</p>
          </div>
        </div>
        <div className={classes.benefit1}>
          <img src={auth} alt="" />
          <div className={classes.policy}>
            <h6>Hàng chính hãng 100%</h6>
            <p>Hoàn tiền nếu phát hiện hàng giả</p>
          </div>
        </div>
        <div className={classes.benefit1}>
          <img src={return1} alt="" />
          <div className={classes.policy}>
            <h6>Đổi trả trong 365 ngày</h6>
            <p>Nếu không hài lòng</p>
          </div>
        </div>
        <div className={classes.benefit1}>
          <img src={cashback} alt="" />
          <div className={classes.policy}>
            <h6>Hoàn tiền 100%</h6>
            <p>Nếu sản phẩm gặp lỗi</p>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.information}>
          <div className={classes.specific}>
            <h3 className={classes.dummyh3}>Hệ thống siêu thị</h3>
            <p>Hotline: 8h-22h</p>
            <h1>0900 7878</h1>
            <h3>Email: ratofhamelin1125@gmail.com</h3>
          </div>
          <div className={classes.specific}>
            <h3>Hỗ trợ khách hàng</h3>
            <p>Chính sách khách hàng thân thiết</p>
            <p>Phương thức thanh toán</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách bảo mật</p>
          </div>
          <div className={classes.specific}>
            <h3>Về HomeShopping</h3>
            <p>Giới thiệu</p>
            <p>Tuyển dụng</p>
            <p>Tin tức</p>
            <p>Cấm nang du lịch</p>
          </div>
          <div className={classes.specific}>
            <h3>Kết nối với HomeShopping</h3>
                <BsFacebook className={classes.icon}/>
                <BsYoutube className={classes.icon}/>
                <FaTiktok className={classes.icon}/>
          </div>
        </div>
        <div className={classes.certificate}>
          <img src={certificate1}/>
          <img src={certificate2}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
