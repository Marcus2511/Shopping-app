import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BsHandbag } from "react-icons/bs";

function Cart({ props}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [price, setPrice] = useState(0);

//   const handleremove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//     handleprice();
//   };


  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <BsHandbag />
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
        <ModalBody>
          {/* <>
            {props.cart.map((item) => {
                return (
                  <div>
                    <h4>{item.title}dddddd</h4>
                    <h5>{item.amount}</h5>
                    <h1>{item.price}</h1>
                  </div>
                )
              })}
          </> */}
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
