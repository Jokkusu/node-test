class BannerModel {
  constructor(bannerId, companyId, bannerImage, duration) {
    this.bannerId = bannerId;
    this.companyId = companyId;
    this.bannerImage = bannerImage;
    this.duration = duration;
  }
  set BannerId(bannerId) {
    this.bannerId = bannerId;
  }
  get BannerId() {
    return this.bannerId;
  }
  set CompanyId(companyId) {
    this.companyId = companyId;
  }
  get CompanyId() {
    return this.companyId;
  }
  set BannerImage(bannerImage) {
    this.bannerImage = bannerImage;
  }
  get BannerImage() {
    return this.bannerImage;
  }
  set Duration(duration) {
    this.duration = duration;
  }
  get Duration() {
    return this.duration;
  }
}
export { BannerModel as B };
