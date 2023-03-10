import React from "react";

import { RadioGroup, Title } from "../components";
import { UserTypeTitle } from "./consts";
import { UserTypesWrapper } from "./styles.styled";
import { UserTypesProps } from "./types";

const UserTypes: React.FC<UserTypesProps> = ({ ...props }) => {
  return (
    <UserTypesWrapper>
      <Title title={UserTypeTitle} />
      <RadioGroup
        userTypes={props.allUserTypes}
        changed={props.changeHandler}
        selectedValue={props.userType}
      />
    </UserTypesWrapper>
  );
};

export default UserTypes;
