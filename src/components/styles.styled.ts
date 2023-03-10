import styled from "styled-components";
import { SubtextTheme, TitleTheme } from "./consts";
import { Theme, ThemeType } from "./types";

/**
 * Avatar
 */
export const AvatarCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: rgb(232, 242, 251);
`;

export const AvatarInitial = styled.p`
  color: rgb(3, 112, 206);
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  margin: 0;
`;

export const AvatarDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

/**
 * RadioButton
 */
export const RadioItemWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background: ${(props: { checked: boolean }) =>
    props.checked ? "#e8f2fb" : ""};
  border-radius: 8px;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
`;

/**
 * Text
 */
export const TextWrapper = styled.p`
  color: ${(props: Theme) =>
    props.type === ThemeType.Title ? TitleTheme.color : SubtextTheme.color};
  font-size: ${(props: Theme) =>
    props.type === ThemeType.Title ? TitleTheme.size : SubtextTheme.size};
  margin: 0;
`;

/**
 * Title
 */
export const TitleWrapper = styled.p`
  color: #212322;
  font-size: 28px;
  font-weight: 450;
`;
