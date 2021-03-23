export class TokenStorage {
    public static get token(): string | null {
        return localStorage.getItem('token');
    }

    public static set token(token: string) {
        localStorage.setItem('token', token);
    }

    public static removeToken() {
        localStorage.removeItem('token');
    }
}
