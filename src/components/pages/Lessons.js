import React from "react";
import Lectures from "../lectures/Lectures";
import Navbar from "../navbar/Navbar";

function Lessons() {
  return (
    <>
      <Navbar />
      <div className="container grid place-items-center pt-[4%] pb-12">
        <Lectures />
      </div>
    </>
  );
}

export default Lessons;
