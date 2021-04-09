import {apiClient} from 'core/apiClient';
import {PaginationContent} from 'types/api';
import {UserInfo, UserListRawRow} from 'types/users';
import {UserRole} from "types/auth";

export async function fetchAdminUsers({
    page,
    pageSize,
}: {
    page: number;
    pageSize: number;
}): Promise<PaginationContent<UserListRawRow>> {
    const path = '/users';
    const params = {page, pageSize};
    return (await apiClient.get(path, {params})).data as PaginationContent<UserListRawRow>;
}

export const fetchUser = async (params: {login: string}): Promise<UserInfo> => {
    return (await apiClient.get(`/users/${params.login}`)).data as UserInfo;
};

export const changePassword = async (params: {login: string; password: string}): Promise<any> => {
    return (await apiClient.post(`/users/${params.login}/password`, {password: params.password}))
        .data;
};

export const changeRole = async (params: {login: string; role: UserRole}): Promise<any> => {
    return (await apiClient.post(`/users/${params.login}/role`, {role: params.role}))
        .data;
};
