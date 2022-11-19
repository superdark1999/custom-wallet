import React from "react";
import styled from "styled-components";

export default function CustomButton({ onClick, title, disabled }) {
  return (
    <CustomButtonStyle disabled={disabled} onClick={onClick}>
      {title}
    </CustomButtonStyle>
  );
}

const CustomButtonStyle = styled.div`
  background: #004dff;
  border-radius: 10px;
  padding: 1rem 2rem;
  width: 100%;

  font-weight: 700;
  font-size: 17px;
  line-height: 100%;
  /* identical to box height, or 17px */

  text-align: center;
  text-transform: uppercase;

  /* Color/Neutral/White */

  color: #ffffff;

  opacity: ${(props) => (props.disabled ? "0.5" : 1)};
`;
