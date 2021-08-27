import React from "react";
import Fade from "react-reveal/Fade";
import DetailModal from "./ModalItem";
import { useGlobalContext } from "../context/Context";

function ListItem() {
  const { data } = useGlobalContext();

  return (
    <div className="d-flex justify-content-evenly align-items-center flex-wrap mt-5">
      <div className="row">
        {data
          ? data.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6" key={index}>
                <Fade top>
                  <div className="m-2 border border-secondary border-1 rounded-2 bg-light">
                    <img src={item.imgBackDefault} className="card-img-top" alt="pict-of-pokemon" />
                  </div>
                  <DetailModal key={index} detail={item} />
                </Fade>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ListItem;
