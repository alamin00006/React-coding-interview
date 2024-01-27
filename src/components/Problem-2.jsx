import React, { useEffect, useState } from "react";
import ModalA from "./ModalA";
import { Button } from "react-bootstrap";
import ModalB from "./ModalB";

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [modalB, setShowModalB] = useState(false);
  const handleShowModalB = () => setShowModalB(true);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={handleShow}
            >
              All Contacts
            </button>

            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={handleShowModalB}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      <ModalA show={show} setShow={setShow} />
      <ModalB modalB={modalB} setShowModalB={setShowModalB} />
    </>
  );
};

export default Problem2;
