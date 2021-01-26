import React from "react";
import "./card-model.scss";
import Showcase from "../../assets/card-expand.svg";
import IconLinked from "../../assets/social-linkedIn.svg";
import IconInsta from "../../assets/social-insta.svg";
import IconFb from "../../assets/social-fb.svg";
import IconYt from "../../assets/social-yt.svg";

const CardModel = () => {
  return (
    <div className="container card-model">
      <div className="my-2">
        <div className="svg-wrap">
          <Showcase />
        </div>
        <div className="description p-1">
          <h3 className="my-1">Smart Navigation</h3>
          <p className="my-1">
            One common utility present in the above-mentioned ones is the
            ‘Global Positioning System (GPS)’ The GPS relies on signals from a
            total of 32 satellites to compute the position of a person/thing in
            the Earth frame. Each of the 32 satellites possesses an atomic clock
            that is synchronized. It emits a radio wave that sends out
            timestamps…
          </p>
          <div className="icons-list row my-2">
            <div className="icon center">
              <IconLinked />
            </div>
            <div className="icon center">
              <IconInsta />
            </div>
            <div className="icon center">
              <IconFb />
            </div>
            <div className="icon center">
              <IconYt />
            </div>
          </div>
          <div id="icon-expand">
            <i class="fas fa-expand-arrows-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModel;
