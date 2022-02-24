export class SignupResponse {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    set Message(message: string) {
        this.message = message;
    }

    get Message(): string {
        return this.message;
    }
}