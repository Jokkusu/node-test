export class LoginModel {
    document: number;
    password: string;

    constructor(document?: number, password?: string) {
        this.document = document;
        this.password = password;
    }

    set Document(document: number) {
        this.document = document
    }

    set Password(password: string) {
        this.password = password;
    }

    get Document(): number {
        return this.document;
    }

    get Password(): string {
        return this.password;
    }
}