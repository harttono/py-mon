import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalItem(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary outline-none border-none  d-block mx-auto" style={{ width: "95%" }} onClick={() => setModalShow(true)}>
        Details
      </Button>
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex  shadow-none p-3 mb-5 bg-light rounded">
            <div className="d-flex align-items-center border border-1 border-dark rounded-3 p-5 m-3">
              <img className="d-block" style={{ width: "130px" }} src={props.detail.sprites.back_shiny} alt="details" />
            </div>
            <div className="p-3">
              <span className="underline">{props.detail.species.name.toLocaleLowerCase()}</span>
              <p className="mt-3">Height : {props.detail.height}</p>
              <p className="mt-3">Weight : {props.detail.weight}</p>
              <h4>Shapes :</h4>
              <div className="d-flex justify-content-between text-white">
                <div className="border border-dark m-1 rounded-2 py-2 bg-primary pr-2">
                  <p className="text-center m-0">Front Default</p>
                  <img src={props?.detail?.sprites?.front_default} alt="front_default" />
                </div>
                <div className="border border-dark m-1 rounded-2 py-2 bg-primary pr-2">
                  <p className="text-center m-0">Back Default</p>
                  <img src={props?.detail?.sprites?.back_default} alt="front_default" />
                </div>
                <div className="border border-dark m-1 rounded-2 py-2 bg-primary pr-2">
                  <p className="text-center m-0">Front Shiny</p>
                  <img src={props?.detail?.sprites?.front_shiny} alt="front_shiny" />
                </div>
                <div className="border border-dark m-1 rounded-2 py-2 bg-primary pr-2">
                  <p className="text-center m-0">Back Shiny</p>
                  <img src={props?.detail?.sprites?.back_shiny} alt="back_shiny" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalItem;
