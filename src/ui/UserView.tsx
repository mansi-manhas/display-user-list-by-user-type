import React, { useState, useEffect, useMemo, useCallback } from "react";

import { API } from "@aws-amplify/api";
import awsConfig from "../api/aws-exports.js";
import { ListZellerCustomers } from "../api/queries";
import { defaultSelection } from "./consts";
import UserTypes from "./UserTypes";
import UserListByType from "./UserListByType";
import { UserViewWrapper } from "./styles.styled";

API.configure(awsConfig);

const UserView: React.FC = () => {
  const [userType, setUserType] = useState(defaultSelection);
  const [userData, setUserData] = useState([]);

  const changeHandler = useCallback((event: any) => {
    setUserType(event.target.value);
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await API.graphql({
          query: ListZellerCustomers,
        });
        console.log((response as any).data.listZellerCustomers.items);
        setUserData((response as any).data.listZellerCustomers.items);
      } catch (error) {
        console.log(error);
      }
    }

    if (userData.length === 0) {
      getData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTitle = useMemo(() => {
    return `${userType} USERS`;
  }, [userType]);

  const getUserList = useMemo(() => {
    if (userData) {
      return userData
        .filter((data: any) => data.role === userType)
        .map((data: any) => {
          return {
            name: data.name,
            role: data.role,
          };
        });
    }

    return [];
  }, [userData, userType]);

  const getAllUserTypes = useMemo(() => {
    if (userData) {
      return Array.from(new Set(userData.map((data: any) => data.role))).sort();
    }
    return [];
  }, [userData]);

  return (
    <UserViewWrapper>
      <UserTypes
        allUserTypes={getAllUserTypes}
        userType={userType}
        changeHandler={changeHandler}
      />
      <UserListByType title={getTitle} userList={getUserList} />
    </UserViewWrapper>
  );
};

export default UserView;
