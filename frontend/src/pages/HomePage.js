import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
  <>
    <h1>Home</h1>
    <Link to="/contacts">
        <button>Contacts</button>
    </Link>
  </>);
}
