export interface UserData {
    name: string;
    role: string;
}

export interface UserListByTypeProps {
    title: string;
    userList: UserData[];
}

export interface UserTypesProps {
    allUserTypes: string[];
    changeHandler: (event: any) => void;
    userType: string;
}