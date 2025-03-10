import React from "react";
import {
  Container,
  ContainerSettings,
  ContainerDefaultProps,
} from "./Container";
import { Text } from "./Text";
import { Button } from "./Button";
import { Canvas, useNode } from "@craftjs/core";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={connect}
      className="text-only"
      style={{
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Text,
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div style={{ padding: "10px 0" }} ref={connect}>
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Button,
  },
};

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Canvas id="text" is={CardTop}>
        <Text text="Only texts" fontSize={20} />
        <Text text="are allowed up here" fontSize={15} />
      </Canvas>
      <Canvas id="buttons" is={CardBottom}>
        <Button size="small" text="Only buttons down here" />
      </Canvas>
    </Container>
  );
};

Card.craft = {
  defaultProps: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
