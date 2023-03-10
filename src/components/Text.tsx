import React from "react";

import { TextWrapper } from "./styles.styled";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({ ...props }) => (
  <>
    <TextWrapper type={props.type}>{props.label}</TextWrapper>
  </>
);

export default Text;
