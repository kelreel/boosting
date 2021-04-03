import {UserRole} from "types/auth";

export type UserListRawRow = {
    _id: string;
    login: string;
    email?: string;
    role: UserRole;
    createdAt: Date;
}

export type UserInfo = {
    _id: string;
    login: string;
    email?: string;
    role: UserRole;
    createdAt: Date;
}

