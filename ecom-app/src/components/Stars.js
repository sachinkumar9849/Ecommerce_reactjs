import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {stars >= index + 1
          ? <AiTwotoneStar/>
          : stars >= number
          ? <FaStarHalfAlt/>
          : <AiOutlineStar/>}
      </span>
    );
  });
  return (
    <div className="reating_block">
      {ratingStar}
      <p>({reviews}customer reviews)</p>
    </div>
  );
};

export default Stars;
