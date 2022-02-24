import { c as create_ssr_component, u as each, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index-bdac9f6e.js";
import "@material/dialog";
import "@material/dom";
import { C as Content } from "../../../../chunks/Actions-ce359a75.js";
import { a as environment, b as getCookie, r as requiredValidation, D as Dialog, g as getCompanies } from "../../../../chunks/InputValidation-37522034.js";
import "uuid";
import { N as Notification } from "../../../../chunks/Notification-5c4b8c21.js";
class LottiCreationModel {
  constructor(companyId, name, description, lottiImage, lottiValue, maxAllowedPlaysPerUser, allowedPlayingMechanism, active, playDate) {
    this.companyId = companyId;
    this.name = name;
    this.description = description;
    this.lottiImage = lottiImage;
    this.lottiValue = lottiValue;
    this.maxAllowedPlaysPerUser = maxAllowedPlaysPerUser;
    this.allowedPlayingMechanism = allowedPlayingMechanism;
    this.active = active;
    this.playDate = playDate;
  }
  get CompanyId() {
    return this.companyId;
  }
  get Name() {
    return this.name;
  }
  get Description() {
    return this.description;
  }
  get LottiImage() {
    return this.lottiImage;
  }
  get LottiValue() {
    return this.lottiValue;
  }
  get MaxAllowedPlaysPerUser() {
    return this.maxAllowedPlaysPerUser;
  }
  get AllowedPlayingMechanism() {
    return this.allowedPlayingMechanism;
  }
  get Active() {
    return this.active;
  }
  get PlayDate() {
    return this.playDate;
  }
}
class LottiModel {
  constructor(lottiId, companyId, name, description, lottiImage, lottiValue, maxAllowedPlaysPerUser, allowedPlayingMechanism, active, playDate) {
    this.lottiId = lottiId;
    this.companyId = companyId;
    this.name = name;
    this.description = description;
    this.lottiImage = lottiImage;
    this.lottiValue = lottiValue;
    this.maxAllowedPlaysPerUser = maxAllowedPlaysPerUser;
    this.allowedPlayingMechanism = allowedPlayingMechanism;
    this.active = active;
    this.playDate = playDate;
  }
  get LottiId() {
    return this.lottiId;
  }
  get CompanyId() {
    return this.companyId;
  }
  get Name() {
    return this.name;
  }
  get Description() {
    return this.description;
  }
  get LottiImage() {
    return this.lottiImage;
  }
  get LottiValue() {
    return this.lottiValue;
  }
  get MaxAllowedPlaysPerUser() {
    return this.maxAllowedPlaysPerUser;
  }
  get AllowedPlayingMechanism() {
    return this.allowedPlayingMechanism;
  }
  get Active() {
    return this.active;
  }
  get PlayDate() {
    return this.playDate;
  }
}
async function getLottis() {
  const getBannersEndpoint = "/admin/lottis";
  const res = await fetch(environment.API_URL + getBannersEndpoint, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + getCookie(environment.AUTH_TOKEN_NAME)
    }
  });
  const data = await res.json();
  let lottisArray = [];
  for (let key in data) {
    let lotti = data[key];
    lottisArray.push(new LottiModel(lotti.lottiId, lotti.companyId, lotti.name, lotti.description, lotti.lottiImage, lotti.lottiValue, lotti.maxAllowedPlaysPerUser, lotti.allowedPlayingMechanism, lotti.active, lotti.playDate));
  }
  return lottisArray;
}
class LottiEditModel {
  constructor(name, description, lottiImage, lottiValue, maxAllowedPlaysPerUser, allowedPlayingMechanism, active, playDate) {
    this.name = name;
    this.description = description;
    this.lottiImage = lottiImage;
    this.lottiValue = lottiValue;
    this.maxAllowedPlaysPerUser = maxAllowedPlaysPerUser;
    this.allowedPlayingMechanism = allowedPlayingMechanism;
    this.active = active;
    this.playDate = playDate;
  }
  get Name() {
    return this.name;
  }
  get Description() {
    return this.description;
  }
  get LottiImage() {
    return this.lottiImage;
  }
  get LottiValue() {
    return this.lottiValue;
  }
  get MaxAllowedPlaysPerUser() {
    return this.maxAllowedPlaysPerUser;
  }
  get AllowedPlayingMechanism() {
    return this.allowedPlayingMechanism;
  }
  get Active() {
    return this.active;
  }
  get PlayDate() {
    return this.playDate;
  }
}
var lottis_svelte_svelte_type_style_lang = "";
const css = {
  code: ".lottis-container.svelte-1ercks6.svelte-1ercks6{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;gap:20px}.lotti-info.svelte-1ercks6.svelte-1ercks6{text-align:center;padding:10px;overflow-x:hidden;overflow-y:auto;height:100%;max-height:100px;margin-top:-5px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:16px}.lotti-image.svelte-1ercks6.svelte-1ercks6{position:relative}.actions.svelte-1ercks6.svelte-1ercks6{position:absolute;bottom:10px;right:10px}.edit.svelte-1ercks6.svelte-1ercks6{padding:8px;border-radius:5px;display:flex;align-items:center}.edit.svelte-1ercks6 .material-icons.svelte-1ercks6{font-size:18px}.red-text.svelte-1ercks6.svelte-1ercks6{color:red;font-weight:700}.lotti.svelte-1ercks6.svelte-1ercks6{width:290px;height:390px;max-height:390px;object-fit:contain;box-shadow:1px 1px 10px rgba(0, 0, 0, 0.25);border-radius:5px}.lotti.svelte-1ercks6 img.svelte-1ercks6{width:100%;border-radius:5px 5px 0 0}.flex-row.svelte-1ercks6.svelte-1ercks6{color:black}.lotti-details.svelte-1ercks6.svelte-1ercks6{width:100%;max-width:350px;padding-right:30px;border-right:1px solid #d4d4d4}.preview.svelte-1ercks6.svelte-1ercks6{width:100%;max-width:270px;height:100%;padding:20px;text-align:center;justify-content:center}.preview.svelte-1ercks6 img.svelte-1ercks6{width:200px;height:200px}.lotti-dialog.svelte-1ercks6.svelte-1ercks6{flex-wrap:wrap;justify-content:center;gap:10px}.form-group.svelte-1ercks6 p.svelte-1ercks6{margin:0}@media(max-width: 729px){.lotti-details.svelte-1ercks6.svelte-1ercks6{padding-right:0;border-right:unset}}",
  map: null
};
const Lottis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lottisArray = [];
  let activeLottiCreationDialog = false;
  async function _getLottis() {
    try {
      let res = await getLottis();
      lottisArray = res;
    } catch (error) {
      requestResponseMessage = error;
      console.log(error);
    }
  }
  _getLottis();
  let createLottiModel = new LottiCreationModel("", "", "", "", 0, 0, [], true, new Date());
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
  let imageKey = "";
  let editImageKey = "";
  let requestResponseMessage = "";
  let activeEditLottiDialog = false;
  let lottiEditModel = new LottiEditModel("", "", "", 0, 0, [], true, new Date());
  let activeDeleteLottiDialog = false;
  let createLottiAllowPIN = false;
  let createLottiAllowBill = false;
  let editLottiAllowPIN = false;
  let editLottiAllowBill = false;
  let activeLottis = [];
  function validateLottiCreationForm(lottiCreationModel) {
    return requiredValidation(lottiCreationModel.Name) && requiredValidation(lottiCreationModel.Description) && requiredValidation(lottiCreationModel.CompanyId) && requiredValidation(lottiCreationModel.LottiValue) && requiredValidation(lottiCreationModel.PlayDate) && requiredValidation(lottiCreationModel.MaxAllowedPlaysPerUser) && lottiCreationModel.MaxAllowedPlaysPerUser > 0 && lottiCreationModel.LottiValue > 0 && lottiCreationModel.AllowedPlayingMechanism.length > 0;
  }
  function validateLottiEditForm(lottiEditModel2) {
    return requiredValidation(lottiEditModel2.Name) && requiredValidation(lottiEditModel2.Description) && requiredValidation(lottiEditModel2.LottiValue) && requiredValidation(lottiEditModel2.PlayDate) && requiredValidation(lottiEditModel2.MaxAllowedPlaysPerUser) && lottiEditModel2.MaxAllowedPlaysPerUser > 0 && lottiEditModel2.LottiValue > 0 && lottiEditModel2.AllowedPlayingMechanism.length > 0;
  }
  let validLottiCreationForm = false;
  let validLottiEditForm = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    createLottiAllowPIN = createLottiModel.AllowedPlayingMechanism.includes(1);
    createLottiAllowBill = createLottiModel.AllowedPlayingMechanism.includes(0);
    editLottiAllowPIN = lottiEditModel.AllowedPlayingMechanism.includes(1);
    editLottiAllowBill = lottiEditModel.AllowedPlayingMechanism.includes(0);
    activeLottis = lottisArray.filter(function(value, index, arr) {
      return value.Active == true;
    });
    validLottiCreationForm = validateLottiCreationForm(createLottiModel);
    validLottiEditForm = validateLottiEditForm(lottiEditModel);
    $$rendered = `${$$result.head += `${$$result.title = `<title>Lottis</title>`, ""}`, ""}

<h1>Lottis</h1>
<div class="${"line-decorator bg-yellow"}" style="${"margin-bottom:20px"}"></div>
<div class="${"flex-row center space-between svelte-1ercks6"}" style="${"margin-bottom: 20px; justify-content: flex-end"}"><button class="${"button bg-yellow"}">Crear Lotti</button></div>

<div class="${"lottis-container svelte-1ercks6"}">${activeLottis.length == 0 ? `<p style="${"color: gray;"}">No hay lottis creados</p>` : ``}
	${each(lottisArray, (lotti) => `${lotti.Active == true ? `<div class="${"lotti svelte-1ercks6"}"><div class="${"lotti-image svelte-1ercks6"}"><img${add_attribute("src", lotti.LottiImage, 0)} alt="${"Imagen del Lotti"}" class="${"svelte-1ercks6"}">
					<div class="${"flex-row center actions svelte-1ercks6"}" style="${"gap: 10px;"}"><button class="${"button bg-yellow edit svelte-1ercks6"}"><span class="${"material-icons svelte-1ercks6"}">edit</span></button>
						<button class="${"button bg-red edit svelte-1ercks6"}"><span class="${"material-icons svelte-1ercks6"}">delete</span></button>
					</div></div>
				<div class="${"lotti-info svelte-1ercks6"}"><p>${escape(lotti.Description.toLocaleUpperCase())}</p>
					<p><span class="${"red-text svelte-1ercks6"}">$${escape(lotti.LottiValue * 28)}</span> MILLONES DE PESOS</p></div>
			</div>` : ``}`)}</div>


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 700px; max-width: calc(100vw - 32px);",
      open: activeLottiCreationDialog
    }, {
      open: ($$value) => {
        activeLottiCreationDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end svelte-1ercks6"}"><button class="${"material-icons"}">close</button></div>
		<div style="${"padding: 10px;"}"><div style="${"color: black; margin-bottom: 20px"}"><h1>Crear Lotti</h1>
				<div class="${"line-decorator bg-yellow"}"></div></div>
			<div class="${"flex-row lotti-dialog svelte-1ercks6"}"><div class="${"lotti-details svelte-1ercks6"}"><form class="${"flex-column center"}" style="${"margin-top: 20px;"}" id="${"createLottiForm"}"></form>
					<form id="${"lottiImageForm"}" enctype="${"multipart/form-data"}"></form>

					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Nombre</p>
						<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", createLottiModel.name, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Descripci\xF3n</p>
						<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", createLottiModel.description, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Empresa</p>
						<select form="${"createBannerForm"}">${each(companiesList, (company) => `${company.CompanyState == 1 ? `<option${add_attribute("value", company.companyId, 0)}>${escape(company.Name)}</option>` : ``}`)}</select></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Imagen</p>
						<input type="${"input"}" name="${"key"}" form="${"lottiImageForm"}" style="${"display: none;"}"${add_attribute("value", imageKey, 0)}>
						<input type="${"hidden"}" name="${"acl"}" value="${"public-read"}" form="${"imageForm"}">
						<input type="${"input"}" name="${"Content-Type"}" value="${"image/jpeg"}" form="${"lottiImageForm"}" style="${"display: none;"}">
						<input type="${"file"}" name="${"file"}" accept="${"image/png, image/jpeg"}" form="${"lottiImageForm"}" id="${"createLottiImage"}"></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Valor del Lotti</p>
						<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", createLottiModel.lottiValue, 0)}>
						<p style="${"font-size: 12px; text-align:center"}" class="${"svelte-1ercks6"}">Un Lotti con valor de $${createLottiModel.LottiValue ? `
								${escape(createLottiModel.LottiValue)}` : `
								0`}
							jugar\xE1 por $${escape(createLottiModel.LottiValue * 28)} millones de pesos
						</p></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Fecha de sorteo</p>
						<input class="${"underlined-input"}" type="${"date"}"${add_attribute("value", createLottiModel.playDate, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">N\xFAmero de intentos por usuario</p>
						<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", createLottiModel.maxAllowedPlaysPerUser, 0)}></div>
					<div class="${"flex-column center"}"><div class="${"flex-row center svelte-1ercks6"}"><input type="${"checkbox"}"${add_attribute("checked", createLottiAllowPIN, 1)}>
							<p>\xA0 Aceptar PIN</p></div>
						<div class="${"flex-row center svelte-1ercks6"}"><input type="${"checkbox"}"${add_attribute("checked", createLottiAllowBill, 1)}>
							<p>\xA0 Aceptar factura</p></div></div>
					<div class="${"flex-row center justify-center svelte-1ercks6"}" style="${"margin-top: 20px;"}"><button class="${"button bg-yellow"}" type="${"submit"}" ${!validLottiCreationForm ? "disabled" : ""}>Crear</button></div></div>
				<div class="${"preview flex-column center svelte-1ercks6"}"><p>Previsualizaci\xF3n</p>
					<div class="${"image-container"}">${`<img class="${"lotti-preview svelte-1ercks6"}" src="${"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}" alt="${"Subir imagen"}">`}</div>
					<div class="${"lotti-info svelte-1ercks6"}"><p>${escape(createLottiModel.Description.toLocaleUpperCase())}</p>
						<p><span class="${"red-text svelte-1ercks6"}">$${escape(createLottiModel.LottiValue * 28)}</span> MILLONES DE PESOS
						</p></div></div></div></div>
		<div class="${"center-text"}"></div>`
      })}`
    })}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 700px; max-width: calc(100vw - 32px);",
      open: activeEditLottiDialog
    }, {
      open: ($$value) => {
        activeEditLottiDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end svelte-1ercks6"}"><button class="${"material-icons"}">close</button></div>
		<div style="${"padding: 10px;"}"><div style="${"color: black; margin-bottom: 20px"}"><h1>Editar Lotti</h1>
				<div class="${"line-decorator bg-yellow"}"></div></div>
			<div class="${"flex-row lotti-dialog svelte-1ercks6"}"><div class="${"lotti-details svelte-1ercks6"}"><form class="${"flex-column center"}" style="${"margin-top: 20px;"}" id="${"editLottiForm"}"></form>
					<form id="${"lottiEditImageForm"}" enctype="${"multipart/form-data"}"></form>

					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Nombre</p>
						<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", lottiEditModel.name, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Descripci\xF3n</p>
						<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", lottiEditModel.description, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Imagen</p>
						<input type="${"input"}" name="${"key"}" form="${"lottiEditImageForm"}" style="${"display: none;"}"${add_attribute("value", editImageKey, 0)}>
						<input type="${"hidden"}" name="${"acl"}" value="${"public-read"}" form="${"imageForm"}">
						<input type="${"input"}" name="${"Content-Type"}" value="${"image/jpeg"}" form="${"lottiEditImageForm"}" style="${"display: none;"}">
						<input type="${"file"}" name="${"file"}" accept="${"image/png, image/jpeg"}" form="${"lottiEditImageForm"}" id="${"createLottiImage"}"></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Valor del Lotti</p>
						<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", lottiEditModel.lottiValue, 0)}>
						<p style="${"font-size: 12px; text-align:center"}" class="${"svelte-1ercks6"}">Un Lotti con valor de $${lottiEditModel.LottiValue ? `
								${escape(lottiEditModel.LottiValue)}` : `
								0`}
							jugar\xE1 por $${escape(lottiEditModel.LottiValue * 28)} millones de pesos
						</p></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">Fecha de sorteo</p>
						<input class="${"underlined-input"}" type="${"date"}"${add_attribute("value", lottiEditModel.playDate, 0)}></div>
					<div class="${"form-group svelte-1ercks6"}"><p class="${"svelte-1ercks6"}">N\xFAmero de intentos por usuario</p>
						<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", lottiEditModel.maxAllowedPlaysPerUser, 0)}></div>
					<div class="${"flex-column center"}"><div class="${"flex-row center svelte-1ercks6"}"><input type="${"checkbox"}"${add_attribute("checked", editLottiAllowPIN, 1)}>
							<p>\xA0 Aceptar PIN</p></div>
						<div class="${"flex-row center svelte-1ercks6"}"><input type="${"checkbox"}"${add_attribute("checked", editLottiAllowBill, 1)}>
							<p>\xA0 Aceptar factura</p></div></div>
					<div class="${"flex-row center justify-center svelte-1ercks6"}" style="${"margin-top: 20px;"}"><button class="${"button bg-yellow"}" type="${"submit"}" ${!validLottiEditForm ? "disabled" : ""}>Editar</button></div></div>
				<div class="${"preview flex-column center svelte-1ercks6"}"><p>Previsualizaci\xF3n</p>
					<div class="${"image-container"}">${`<img class="${"lotti-preview svelte-1ercks6"}"${add_attribute("src", lottiEditModel.lottiImage, 0)} alt="${"Subir imagen"}">`}</div>
					<div class="${"lotti-info svelte-1ercks6"}"><p>${escape(lottiEditModel.Description.toLocaleUpperCase())}</p>
						<p><span class="${"red-text svelte-1ercks6"}">$${escape(lottiEditModel.LottiValue * 28)}</span> MILLONES DE PESOS
						</p></div></div></div></div>
		<div class="${"center-text"}"></div>`
      })}`
    })}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeDeleteLottiDialog
    }, {
      open: ($$value) => {
        activeDeleteLottiDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end svelte-1ercks6"}"><button class="${"material-icons"}">close</button></div>
		<h1 style="${"color: black;"}">Eliminar Lotti</h1>
		<div class="${"line-decorator bg-yellow"}"></div>
		<div class="${"flex-row justify-center svelte-1ercks6"}" style="${"color: black; margin:20px"}">\xBFEst\xE1 seguro de que desea eliminar el Lotti?
		</div>
		<div class="${"center-text"}"><button class="${"button bg-red"}" type="${"submit"}">Eliminar</button></div>`
      })}`
    })}

${validate_component(Notification, "Notification").$$render($$result, { message: requestResponseMessage }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export { Lottis as default };
