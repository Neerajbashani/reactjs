import React from "react";

export default function Collepaseble(props) {
  return <>{props.isOpen ? props.children : null}</>;
}
