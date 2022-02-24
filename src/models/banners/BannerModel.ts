export class BannerModel {
    bannerId: string;
    companyId: string;
    bannerImage: string;
    duration: number;

    constructor(bannerId: string, companyId: string, bannerImage: string, duration: number) {
        this.bannerId = bannerId;
        this.companyId = companyId;
        this.bannerImage = bannerImage;
        this.duration = duration;
    }

    set BannerId(bannerId: string) {
        this.bannerId = bannerId;
    }

    get BannerId(): string {
        return this.bannerId;
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