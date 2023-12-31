import React from "react";
import Topics from "../topics/Topics";
import { FaFireFlameCurved } from "react-icons/fa6";
import Navbar from "../navbar/Navbar";

function LessonTopics() {
  return (
    <>
      <Navbar />
      <div className="container px-4 880:px-12 grid place-items-center pt-[8%] pb-12">
        <Topics />
      </div>
    </>
  );
}

export default LessonTopics;
