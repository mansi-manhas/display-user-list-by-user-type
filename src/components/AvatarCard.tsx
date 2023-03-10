import React from "react";

import {
  AvatarCardWrapper,
  AvatarDetails,
  AvatarInitial,
  AvatarWrapper,
} from "./styles.styled";
import { AvatarCardProps, ThemeType } from "./types";

import Text from "./Text";

const AvatarCard: React.FC<AvatarCardProps> = ({ ...props }) => (
  <AvatarCardWrapper>
    <AvatarWrapper>
      <AvatarInitial>{props.name?.charAt(0)}</AvatarInitial>
    </AvatarWrapper>
    <AvatarDetails>
      <Text type={ThemeType.Title} label={props.name} />
      <Text type={ThemeType.Subtext} label={props.role} />
    </AvatarDetails>
  </AvatarCardWrapper>
);

export default AvatarCard;
