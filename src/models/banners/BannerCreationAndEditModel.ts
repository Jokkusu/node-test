export class BannerCreationAndEditModel {
    companyId: string;
    bannerImage: string;
    duration: number;

    constructor(companyId: string, bannerImage: string, duration: number) {
        this.companyId = companyId;
        this.bannerImage = bannerImage;
        this.duration = duration;
    }

    set CompanyId(companyId: string){
        this.companyId = companyId;
    }

    get CompanyId(): string {
        return this.companyId;
    }

    set BannerImage(bannerImage: string) {
        this.bannerImage = bannerImage;
    }

    get BannerImage(): string {
        return this.bannerImage;
    }

    set Duration(duration: number) {
        this.duration = duration;
    }

    get Duration(): number {
        return this.duration;
    }
}