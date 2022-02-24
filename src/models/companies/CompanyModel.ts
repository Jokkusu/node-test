export class CompanyModel {
    companyId: string;
    name: string;
    nit: number;
    email: string;
    companyState: number;

    constructor(companyId: string, name: string, nit: number, email: string, companyState: number) {
        this.companyId = companyId;
        this.name = name;
        this.nit = nit;
        this.email = email;
        this.companyState = companyState;
    }

    set CompanyId(companyId: string) {
        this.companyId = companyId;
    }

    set Name(name: string) {
        this.name = name;
    }

    set NIT(nit: number) {
        this.nit = nit;
    }

    set Email(email: string) {
        this.email = email;
    }

    set CompanyState(companyState: number) {
        this.companyState = companyState;
    }

    get CompanyId(): string {
        return this.companyId;
    }

    get Name(): string {
        return this.name;
    }

    get NIT(): number {
        return this.nit;
    }

    get Email(): string {
        return this.email;
    }

    get CompanyState(): number {
        return this.companyState;
    }
}