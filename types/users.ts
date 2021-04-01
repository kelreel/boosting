import {UserRole} from "types/auth";

export type UserListRawRow = {
    _id: string;
    login: string;
    email?: string;
    role: UserRole;
    createdAt: Date;
}
