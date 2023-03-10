import React from "react";

import { AvatarCard, Title } from "../components";
import { ListItemWrapper, UserListWrapper } from "./styles.styled";
import { UserListByTypeProps } from "./types";

const UserListByType: React.FC<UserListByTypeProps> = ({ ...props }) => {
  return (
    <UserListWrapper>
      <Title title={props.title} />
      {!props.userList.length && 'No Users Available'}
      {props.userList.map((user: any, idx: number) => (
        <ListItemWrapper key={idx}>
          <AvatarCard name={user.name} role={user.role} />
        </ListItemWrapper>
      ))}
    </UserListWrapper>
  );
};

export default UserListByType;
