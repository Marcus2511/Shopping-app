import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BsHandbag } from "react-icons/bs";
import "./Cart.css";

function Cart(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { cart, addtocart, removetocart } = props;
  const price = cart.reduce((x, y) => x + y.quty * y.price, 0);
  const shipping = price >= 200 ? 50 : 0;
  const total = price + shipping;

  const printReceipt = () => {
    return window.print();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <BsHandbag />
      </Button>
      <Button color="danger" onClick={printReceipt}>
        Print
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
        <ModalBody>
          <div>{cart.length === 0 && <div>Cart is empty</div>}</div>
          <div className="bill">
            {cart.map((item) => (
              <div key={item.id} className="row">
                <img className="image" src={item.image} alt=""></img>
                <div className="col-2">{item.title}</div>
                <div className="col-2">
                  <button onClick={() => addtocart(item)} className="add">
                    +
                  </button>
                  <button onClick={() => removetocart(item)} className="remove">
                    -
                  </button>
                </div>
                <div className="col-2 text-left">
                  {item.quty} x ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="price">
            {cart.length !== 0 && (
              <>
                <hr />
                <div className="row">
                  <div>Price</div>
                  <div>${price.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div>shipping Price</div>
                  <div>${shipping.toFixed(2)}</div>
                </div>
                <hr />
                <div className="row">
                  <h3>Total Price</h3>
                  <div>
                    <strong>
                      <h3>${total.toFixed(2)}</h3>
                    </strong>
                  </div>
                </div>
              </>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Commit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Cart;
