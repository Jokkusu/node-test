export class LoginResponse {
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    set Token(token: string) {
        this.token = token;
    }

    get Token(): string {
        return this.token;
    }
}