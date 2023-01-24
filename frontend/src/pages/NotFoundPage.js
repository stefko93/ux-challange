import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h3>This page could not be found</h3>
      <Link to="/">Go Home</Link>
    </div>
  );
}