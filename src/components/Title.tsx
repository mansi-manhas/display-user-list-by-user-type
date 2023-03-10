import React from "react";

import { TitleWrapper } from "./styles.styled";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({ ...props }) => (
  <TitleWrapper>{props.title}</TitleWrapper>
);

export default Title;
