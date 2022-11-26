import styled from "styled-components";

export const ContainerBlocks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 30vh;
  border: 2px solid green;
`;

export const Block = styled.div`
  height: 10vh;
  width: 10vw;
  position: static;
  top: 0;
  left: 0;
  background-color: red;
  &:hover {
    background-color: blue;
    position: absolute;
    height: 20vh;
    width: 20vw;
    transition: 0.5s;
  }
`;
