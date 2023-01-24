import React from "react";

export default function ContactInfo({name, phone, avatar}) {
  return (
  <>
    <>{avatar}</>
    <div>
        <h1>{name}</h1>
        <p>{phone}</p>
    </div>
    
  </>);
}
