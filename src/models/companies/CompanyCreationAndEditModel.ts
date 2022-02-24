export class CompanyCreationAndEditModel {
    name: string;
    nit: number;
    email: string;
    companyState: number;

    constructor(name: string, nit: number, email: string, companyState: number) {
        this.name = name;
        this.nit = nit;
        this.email = email;
        this.companyState = companyState;
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

    set CompanyState(companyState: number){
        this.companyState = companyState;
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

    get CompanState(): number {
        return this.companyState;
    }
}