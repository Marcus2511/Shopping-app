import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>This feature isn't completed</ModalHeader>
        <ModalBody>
          This feature hasn't been completed yet.
          Please be patient, we will finish it as soon as possible. Thank your for your support!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Have a good day
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;