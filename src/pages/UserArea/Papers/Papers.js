import React, { useState } from "react";
import { ContainerBlocks, Block } from "./styles";

const Papers = () => {
  const [movBlock, setMovBlock] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <ContainerBlocks>
        <Block />
        <Block onClick={() => setMovBlock(!movBlock)} movBlock={movBlock} />
        <Block />
        <Block />
      </ContainerBlocks>
    </div>
  );
};

export default Papers;
