import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";

const AddTocart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[2]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Wrapper className="color_block">
      <p className="d-flex">
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              className={color === curColor ? "btnStyle active" : "btnStyle "}
              key={index}
              style={{ backgroundColor: curColor }}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </p>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Link to="/cart">
        <button className="btn btn-success">add to cart</button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .btnStyle {
    width: 44px;
    height: 44px;
    line-height: 44px;
    border-radius: 50%;
    border: 0;
    margin-right: 16px;
  }
`;

export default AddTocart;
