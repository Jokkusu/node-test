import { c as create_ssr_component, u as each, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index-bdac9f6e.js";
import "@material/dialog";
import "@material/dom";
import { C as Content } from "../../../../chunks/Actions-ce359a75.js";
import { a as environment, b as getCookie, r as requiredValidation, D as Dialog, g as getCompanies } from "../../../../chunks/InputValidation-37522034.js";
import { N as Notification } from "../../../../chunks/Notification-5c4b8c21.js";
import { B as BannerModel } from "../../../../chunks/BannerModel-7851571f.js";
import "uuid";
class BannerCreationAndEditModel {
  constructor(companyId, bannerImage, duration) {
    this.companyId = companyId;
    this.bannerImage = bannerImage;
    this.duration = duration;
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
async function getBanners() {
  const getBannersEndpoint = "/admin/banners";
  const res = await fetch(environment.API_URL + getBannersEndpoint, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + getCookie(environment.AUTH_TOKEN_NAME)
    }
  });
  const data = await res.json();
  let bannersArray = [];
  for (let key in data) {
    let banner = data[key];
    bannersArray.push(new BannerModel(banner.bannerId, banner.companyId, banner.bannerImage, banner.duration));
  }
  return bannersArray;
}
var banners_svelte_svelte_type_style_lang = "";
const css = {
  code: ".banners-container.svelte-1721swn.svelte-1721swn{gap:20px}.banner-item.svelte-1721swn.svelte-1721swn{width:100%;box-shadow:2px 4px 9px rgba(0, 0, 0, 0.25)}.banner-item.svelte-1721swn p.svelte-1721swn{padding:10px 20px}.banner-image.svelte-1721swn.svelte-1721swn{position:relative}.banner-image.svelte-1721swn img.svelte-1721swn{width:100%;height:100%}.banner-image.svelte-1721swn .edit.svelte-1721swn{position:absolute;bottom:10px;right:10px}.banner-image.svelte-1721swn .delete.svelte-1721swn{position:absolute;bottom:10px;right:110px}.edit.svelte-1721swn.svelte-1721swn,.delete.svelte-1721swn.svelte-1721swn{height:40px;display:flex;justify-content:center;align-items:center}.image-container.svelte-1721swn.svelte-1721swn{width:100%;height:80px}.banner-preview.svelte-1721swn.svelte-1721swn{width:100%;height:100%;object-fit:contain}@media(max-width: 500px){.edit.svelte-1721swn.svelte-1721swn,.delete.svelte-1721swn.svelte-1721swn{height:20px;width:auto;padding:12px 20px}.delete.svelte-1721swn .material-icons.svelte-1721swn{font-size:16px}}",
  map: null
};
const Banners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let validBannerCreationForm;
  let validBannerEditForm;
  let bannersArray = [];
  let requestResponseMessage = "";
  async function _getBanners() {
    try {
      let res = await getBanners();
      bannersArray = res;
    } catch (error) {
      requestResponseMessage = error;
      console.log(error);
    }
  }
  _getBanners();
  let companiesList = [];
  async function _getCompanies() {
    try {
      companiesList = await getCompanies();
    } catch (error) {
      requestResponseMessage = "Error al obtener las empresas, por favor intentelo de nuevo en un momento";
      console.log(error);
    }
  }
  _getCompanies();
  let activeCreateBannerDialog = false;
  let bannerCreationModel = new BannerCreationAndEditModel("", "", void 0);
  let imageKey = "";
  let activeEditBannerDialog = false;
  let bannerEditModel = new BannerCreationAndEditModel("", "", void 0);
  let editImageKey;
  let activeDeleteBannerDialog = false;
  function validateBannerForm(bannerModel) {
    return requiredValidation(bannerModel.CompanyId) && requiredValidation(bannerModel.Duration);
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    validBannerCreationForm = validateBannerForm(bannerCreationModel);
    validBannerEditForm = validateBannerForm(bannerEditModel);
    $$rendered = `${$$result.head += `${$$result.title = `<title>Banners</title>`, ""}`, ""}

<h1>Banners</h1>
<div class="${"line-decorator bg-yellow"}"></div>
<div class="${"flex-row flex-end"}" style="${"margin-bottom: 20px;"}"><button class="${"button bg-yellow"}">Crear Banner</button></div>

<div class="${"banners-container flex-column center svelte-1721swn"}">${bannersArray.length == 0 ? `<p style="${"color: gray;"}">No hay banners creados</p>` : ``}
	${each(bannersArray, (banner) => `<div class="${"banner-item flex-column svelte-1721swn"}"><div class="${"banner-image svelte-1721swn"}"><img${add_attribute("src", banner.BannerImage, 0)} alt="${"Im\xE1gen banner"}" class="${"svelte-1721swn"}">
				<button class="${"button bg-yellow edit svelte-1721swn"}">Editar</button>
				<button class="${"button bg-red delete svelte-1721swn"}"><span class="${"material-icons svelte-1721swn"}">delete</span></button></div>
			<p class="${"svelte-1721swn"}">Duraci\xF3n: ${escape(banner.Duration)} segundos</p>
		</div>`)}</div>


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeCreateBannerDialog
    }, {
      open: ($$value) => {
        activeCreateBannerDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons"}">close</button></div>
		<h1 style="${"color: black;"}">Crear Banner</h1>
		<div class="${"line-decorator bg-yellow"}"></div>
		<form class="${"flex-column center"}" style="${"margin-top: 20px;"}" id="${"createBannerForm"}"></form>
		<form id="${"imageForm"}" enctype="${"multipart/form-data"}"></form>
		<div class="${"form-group"}"><p>Imagen (900x100px)</p>
			<div class="${"image-container svelte-1721swn"}">${`<img class="${"banner-preview svelte-1721swn"}" src="${"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}" alt="${"Subir imagen"}">`}</div>

			<input type="${"input"}" name="${"key"}" form="${"imageForm"}" style="${"display: none;"}"${add_attribute("value", imageKey, 0)}>
			<input type="${"hidden"}" name="${"acl"}" value="${"public-read"}" form="${"imageForm"}">
			<input type="${"input"}" name="${"Content-Type"}" value="${"image/jpeg"}" form="${"imageForm"}" style="${"display: none;"}">
			<input type="${"file"}" name="${"file"}" accept="${"image/png, image/jpeg"}" form="${"imageForm"}" id="${"createBannerImage"}"></div>
		<div class="${"form-group"}"><p>Empresa</p>
			<select form="${"createBannerForm"}">${each(companiesList, (company) => `${company.CompanyState == 1 ? `<option${add_attribute("value", company.CompanyId, 0)}>${escape(company.Name)}</option>` : ``}`)}</select></div>
		<div class="${"form-group"}"><p>Duraci\xF3n (segundos)</p>
			<div class="${"password-container"}"><input form="${"createBannerForm"}" id="${"passwordInputLogin"}" class="${"underlined-input"}" type="${"number"}"${add_attribute("value", bannerCreationModel.duration, 0)}></div></div>
		<div class="${"center-text"}"><button form="${"createBannerForm"}" class="${"button bg-yellow"}" type="${"submit"}" ${!validBannerCreationForm ? "disabled" : ""}>Crear Banner</button></div>`
      })}`
    })}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeEditBannerDialog
    }, {
      open: ($$value) => {
        activeEditBannerDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons"}">close</button></div>
		<h1 style="${"color: black;"}">Editar Banner</h1>
		<div class="${"line-decorator bg-yellow"}"></div>
		<form class="${"flex-column center"}" style="${"margin-top: 20px;"}" id="${"editBannerForm"}"></form>
		<form id="${"imageEditForm"}" enctype="${"multipart/form-data"}"></form>
		<div class="${"form-group"}"><p>Imagen (900x100px)</p>
			<div class="${"image-container svelte-1721swn"}">${`<img class="${"banner-preview svelte-1721swn"}"${add_attribute("src", bannerEditModel.BannerImage, 0)} alt="${"Subir imagen"}">`}</div>

			<input type="${"input"}" name="${"key"}" form="${"imageEditForm"}" style="${"display: none;"}"${add_attribute("value", editImageKey, 0)}>
			<input type="${"hidden"}" name="${"acl"}" value="${"public-read"}" form="${"imageEditForm"}">
			<input type="${"input"}" name="${"Content-Type"}" value="${"image/jpeg"}" form="${"imageEditForm"}" style="${"display: none;"}">
			<input type="${"file"}" name="${"file"}" accept="${"image/png, image/jpeg"}" form="${"imageEditForm"}" id="${"editBannerImage"}"></div>
		<div class="${"form-group"}"><p>Empresa</p>
			<select form="${"editBannerForm"}">${each(companiesList, (company) => `${company.CompanyState == 1 ? `<option${add_attribute("value", company.companyId, 0)}>${escape(company.Name)}</option>` : ``}`)}</select></div>
		<div class="${"form-group"}"><p>Duraci\xF3n</p>
			<div class="${"password-container"}"><input id="${"passwordInputLogin"}" class="${"underlined-input"}" type="${"number"}" form="${"editBannerForm"}"${add_attribute("value", bannerEditModel.duration, 0)}></div></div>
		<div class="${"center-text"}"><button form="${"editBannerForm"}" class="${"button bg-yellow"}" type="${"submit"}" ${!validBannerEditForm ? "disabled" : ""}>Editar Banner</button></div>`
      })}`
    })}

${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeDeleteBannerDialog
    }, {
      open: ($$value) => {
        activeDeleteBannerDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons"}">close</button></div>
		<h1 style="${"color: black;"}">Eliminar Banner</h1>
		<div class="${"line-decorator bg-yellow"}"></div>
		<div class="${"flex-row justify-center"}" style="${"color: black; margin:20px"}">\xBFEst\xE1 seguro de que desea eliminar el banner?
		</div>
		<div class="${"center-text"}"><button class="${"button bg-red"}" type="${"submit"}">Eliminar</button></div>`
      })}`
    })}

${validate_component(Notification, "Notification").$$render($$result, { message: requestResponseMessage }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export { Banners as default };
