export class UserSignupModel {
    document: number;
    password: string;
    phoneNumber: string;
    email: string;

    constructor(document?: number, password?: string, phoneNumber?: string, email?: string) {
        this.document = document;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    set Document(document: number) {
        this.document = document
    }

    set Password(password: string) {
        this.password = password;
    }

    set PhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    set Email(email: string) {
        this.email = email;
    }

    get Document(): number {
        return this.document;
    }

    get Password(): string {
        return this.password;
    }

    get PhoneNumber(): string {
        return this.phoneNumber;
    }

    get Email(): string {
        return this.email;
    }
}