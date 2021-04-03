import { apiClient } from "core/apiClient";
import {PaginationContent} from "types/api";
import {UserInfo, UserListRawRow} from "types/users";

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
}
