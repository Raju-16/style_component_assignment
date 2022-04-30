import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.value === "primary" ? "#80AADD" : "white"};
  color: ${(props) =>
    props.value === "default"
      ? "1px solid black"
      : props.value === "dashed"
      ? "1px dashed black"
      : "none"};

  border: ${(props) =>
    props.value === "primary"
      ? "white"
      : props.value === "link"
      ? "#80AADD"
      : "black"};
  font-size: 14px;
  padding: 10px;
  height: 35px;
  width: 200px;
  margin: 5px;
  &:hover {
    background-color: #61b33b;
    color: ${(props) => (props.value === "primary" ? "black" : "#224466")};
  }
`;
