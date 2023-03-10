export enum ThemeType {
  Title = "Title",
  Subtext = "Subtext",
}

export interface Theme {
  type: ThemeType;
  color?: string;
  size?: string;
}

export interface AvatarCardProps {
  name: string;
  role: string;
}

export interface RadioProps {
  id: string;
  changed: (event: any) => void;
  value: string;
  checked: boolean;
  label: string;
}

export interface RadioGroupProps {
  userTypes: string[];
  changed: (event: any) => void;
  selectedValue: string;
}

export interface TextProps {
  type: ThemeType;
  label: string;
}

export interface TitleProps {
  title: string;
}
