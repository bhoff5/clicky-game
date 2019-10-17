import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function ClickItem(props) {
  return (
    <div
      alt={props.name}
      className="click-item"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none",
        top: Math.floor(Math.random() * 60) + 20 + "vh",
        animationDuration: Math.random() * 30 + 8 + "s",
        height: props.height,
        width: props.width,
        animationDelay: Math.random() * -25 + "s"
      }}
      onClick={() => props.clickCount(props.id)}
    />
  );
}

export default ClickItem;
