import { apiClient } from "core/apiClient";
import {PaginationContent} from "types/api";
import {UserListRawRow} from "types/users";

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
