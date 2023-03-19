import React from "react";

export default function Hello(props) {
  if (props.name) {
    return <div>Hello, {props.name}!</div>;
  } else {
    return <div>Hey, stranger</div>;
  }
}