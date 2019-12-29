import React from "react";
import "./Button.css";

const Button = props => {
  const { className, cart, onClick } = props;
  console.log(props)
  const style = `${className} ${cart ? "btn-yellow" : "button"}`;
  return <button className={style} onClick={onClick}>{props.children}</button>;
};

export default Button;
