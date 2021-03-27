export interface AuthResponse {
    token: string;
    login: string;
}

export interface AuthData {
    _id: string;
    login: string;
    role: UserRole;
};

export enum UserRole {
    admin = "admin",
    manager = "manager",
    booster = "booster",
    suspended = "suspended"
}

export interface AuthRequest {
    login: string;
    password: string;
}
