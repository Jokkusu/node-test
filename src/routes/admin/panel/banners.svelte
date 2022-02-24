<script lang="ts">
	import { Content } from '@smui/dialog';
	import Dialog from '@smui/dialog/src/Dialog.svelte';
	import Notification from 'src/components/Notification.svelte';
	import { BannerCreationAndEditModel } from 'src/models/banners/BannerCreationAndEditModel';
	import type { BannerModel } from 'src/models/banners/BannerModel';
	import type { CompanyModel } from 'src/models/companies/CompanyModel';
	import {
		createBanner,
		deleteBanner,
		editBanner,
		getBanners
	} from 'src/services/domain/banners/Banners';
	import { getCompanies } from 'src/services/domain/company/Company';
	import { uploadImage } from 'src/services/domain/S3Bucket/Upload';
	import { requiredValidation } from 'src/utils/InputValidation';
	import { v4 as uuidv4 } from 'uuid';
	let bannersArray: BannerModel[] = [];

	let requestResponseMessage: string = '';

	async function _getBanners(): Promise<void> {
		try {
			let res = await getBanners();
			bannersArray = res;
		} catch (error) {
			requestResponseMessage = error;
			console.log(error);
		}
	}

	_getBanners();

	/*
	for (let index = 1; index < 7; index++) {
		const element = new BannerModel(
			'',
			index.toString(),
			'https://picsum.photos/900/100' + '?random=' + index + 1,
			index + 3
		);
		bannersArray.push(element);
	} */

	let companiesList: CompanyModel[] = [];

	async function _getCompanies(): Promise<void> {
		try {
			companiesList = await getCompanies();
		} catch (error) {
			requestResponseMessage =
				'Error al obtener las empresas, por favor intentelo de nuevo en un momento';
			console.log(error);
		}
	}

	_getCompanies();

	let activeCreateBannerDialog: boolean = false;
	let bannerCreationModel: BannerCreationAndEditModel = new BannerCreationAndEditModel(
		'',
		'',
		undefined
	);

	let imageKey: string = '';
	let createBannerImage;

	async function _createBanner(): Promise<void> {
		try {
			// Upload image and get url
			let imageUrl = await uploadImage(
				new FormData(<HTMLFormElement>document.getElementById('imageForm')),
				imageKey
			);
			bannerCreationModel.BannerImage = imageUrl;
			let res = await createBanner(bannerCreationModel);
			requestResponseMessage = res;
			activeCreateBannerDialog = false;
			_getBanners();
		} catch (error) {
			requestResponseMessage = error;
			console.log(error);
		}
	}

	function changeBannerDialogImage(e, toEdit: boolean) {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			if (toEdit) {
				editImageKey = 'banner-' + uuidv4();
				editBannerImage = e.target.result;
				changedBannerImage = true;
			} else {
				imageKey = 'banner-' + uuidv4();
				createBannerImage = e.target.result;
			}
		};
	}

	let activeEditBannerDialog: boolean = false;
	let bannerEditModel: BannerCreationAndEditModel = new BannerCreationAndEditModel(
		'',
		'',
		undefined
	);
	let activeEditBannerId: string;

	function setUpActiveEditBannerModel(banner: BannerModel): void {
		activeEditBannerDialog = true;
		bannerEditModel = new BannerCreationAndEditModel(
			banner.companyId,
			banner.BannerImage,
			banner.Duration
		);
		activeEditBannerId = banner.BannerId;
	}

	let changedBannerImage: boolean = false;
	let editBannerImage;
	let editImageKey;

	async function _editBanner(): Promise<void> {
		try {
			if (changedBannerImage) {
				let imageUrl = await uploadImage(
					new FormData(<HTMLFormElement>document.getElementById('imageEditForm')),
					editImageKey
				);
				bannerEditModel.BannerImage = imageUrl;
			}
			console.log(bannerEditModel.BannerImage);
			let res = await editBanner(activeEditBannerId, bannerEditModel);
			requestResponseMessage = res;
			activeEditBannerDialog = false;
			_getBanners();
		} catch (error) {
			requestResponseMessage = error;
			console.log(error);
		}
	}

	let activeDeleteBannerDialog: boolean = false;
	let activeDeleteBannerId: string;

	async function _deleteBanner(): Promise<void> {
		console.log(activeDeleteBannerId);
		try {
			let res = await deleteBanner(activeDeleteBannerId);
			requestResponseMessage = res;
			activeDeleteBannerDialog = false;
			_getBanners();
		} catch (error) {
			requestResponseMessage = error;
			console.log(error);
		}
	}

	function validateBannerForm(bannerModel: BannerCreationAndEditModel): boolean {
		return requiredValidation(bannerModel.CompanyId) && requiredValidation(bannerModel.Duration);
	}

	$: validBannerCreationForm = validateBannerForm(bannerCreationModel);
	$: validBannerEditForm = validateBannerForm(bannerEditModel);
</script>

<svelte:head>
	<title>Banners</title>
</svelte:head>

<h1>Banners</h1>
<div class="line-decorator bg-yellow" />
<div class="flex-row flex-end" style="margin-bottom: 20px;">
	<button on:click={() => (activeCreateBannerDialog = true)} class="button bg-yellow"
		>Crear Banner</button
	>
</div>

<div class="banners-container flex-column center">
	{#if bannersArray.length == 0}
		<p style="color: gray;">No hay banners creados</p>
	{/if}
	{#each bannersArray as banner}
		<div class="banner-item flex-column">
			<div class="banner-image">
				<img src={banner.BannerImage} alt="Imágen banner" />
				<button on:click={() => setUpActiveEditBannerModel(banner)} class="button bg-yellow edit"
					>Editar</button
				>
				<button
					on:click={() => {
						activeDeleteBannerDialog = true;
						activeDeleteBannerId = banner.BannerId;
					}}
					class="button bg-red delete"><span class="material-icons">delete</span></button
				>
			</div>
			<p>Duración: {banner.Duration} segundos</p>
		</div>
	{/each}
</div>

<!-- Create Banner Dialog -->
<Dialog
	bind:open={activeCreateBannerDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeCreateBannerDialog = false)} class="material-icons"
				>close</button
			>
		</div>
		<h1 style="color: black;">Crear Banner</h1>
		<div class="line-decorator bg-yellow" />
		<form class="flex-column center" style="margin-top: 20px;" id="createBannerForm" />
		<form id="imageForm" enctype="multipart/form-data" />
		<div class="form-group">
			<p>Imagen (900x100px)</p>
			<div class="image-container">
				{#if createBannerImage}
					<img class="banner-preview" src={createBannerImage} alt="Imagen del banner a crear" />
				{:else}
					<img
						class="banner-preview"
						src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
						alt="Subir imagen"
					/>
				{/if}
			</div>

			<input
				type="input"
				name="key"
				bind:value={imageKey}
				form="imageForm"
				style="display: none;"
			/>
			<input type="hidden" name="acl" value="public-read" form="imageForm" />
			<input
				type="input"
				name="Content-Type"
				value="image/jpeg"
				form="imageForm"
				style="display: none;"
			/>
			<input
				type="file"
				name="file"
				accept="image/png, image/jpeg"
				form="imageForm"
				on:change={(e) => changeBannerDialogImage(e, false)}
				id="createBannerImage"
			/>
		</div>
		<div class="form-group">
			<p>Empresa</p>
			<select bind:value={bannerCreationModel.CompanyId} form="createBannerForm">
				{#each companiesList as company}
					{#if company.CompanyState == 1}
						<option value={company.CompanyId}>{company.Name}</option>
					{/if}
				{/each}
			</select>
		</div>
		<div class="form-group">
			<p>Duración (segundos)</p>
			<div class="password-container">
				<input
					form="createBannerForm"
					bind:value={bannerCreationModel.duration}
					id="passwordInputLogin"
					class="underlined-input"
					type="number"
				/>
			</div>
		</div>
		<div class="center-text">
			<button
				form="createBannerForm"
				on:click|preventDefault={_createBanner}
				class="button bg-yellow"
				type="submit"
				disabled={!validBannerCreationForm}>Crear Banner</button
			>
		</div>
	</Content>
</Dialog>

<!-- Edit Banner Dialog -->
<Dialog
	bind:open={activeEditBannerDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeEditBannerDialog = false)} class="material-icons">close</button
			>
		</div>
		<h1 style="color: black;">Editar Banner</h1>
		<div class="line-decorator bg-yellow" />
		<form class="flex-column center" style="margin-top: 20px;" id="editBannerForm" />
		<form id="imageEditForm" enctype="multipart/form-data" />
		<div class="form-group">
			<p>Imagen (900x100px)</p>
			<div class="image-container">
				{#if editBannerImage}
					<img class="banner-preview" src={editBannerImage} alt="Imagen del banner a crear" />
				{:else}
					<img class="banner-preview" src={bannerEditModel.BannerImage} alt="Subir imagen" />
				{/if}
			</div>

			<input
				type="input"
				name="key"
				bind:value={editImageKey}
				form="imageEditForm"
				style="display: none;"
			/>
			<input type="hidden" name="acl" value="public-read" form="imageEditForm" />
			<input
				type="input"
				name="Content-Type"
				value="image/jpeg"
				form="imageEditForm"
				style="display: none;"
			/>
			<input
				type="file"
				name="file"
				accept="image/png, image/jpeg"
				form="imageEditForm"
				on:change={(e) => changeBannerDialogImage(e, true)}
				id="editBannerImage"
			/>
		</div>
		<div class="form-group">
			<p>Empresa</p>
			<select bind:value={bannerEditModel.CompanyId} form="editBannerForm">
				{#each companiesList as company}
					{#if company.CompanyState == 1}
						<option value={company.companyId}>{company.Name}</option>
					{/if}
				{/each}
			</select>
		</div>
		<div class="form-group">
			<p>Duración</p>
			<div class="password-container">
				<input
					bind:value={bannerEditModel.duration}
					id="passwordInputLogin"
					class="underlined-input"
					type="number"
					form="editBannerForm"
				/>
			</div>
		</div>
		<div class="center-text">
			<button
				on:click|preventDefault={_editBanner}
				form="editBannerForm"
				class="button bg-yellow"
				type="submit"
				disabled={!validBannerEditForm}>Editar Banner</button
			>
		</div>
	</Content>
</Dialog>

<Dialog
	bind:open={activeDeleteBannerDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeDeleteBannerDialog = false)} class="material-icons"
				>close</button
			>
		</div>
		<h1 style="color: black;">Eliminar Banner</h1>
		<div class="line-decorator bg-yellow" />
		<div class="flex-row justify-center" style="color: black; margin:20px">
			¿Está seguro de que desea eliminar el banner?
		</div>
		<div class="center-text">
			<button on:click|preventDefault={_deleteBanner} class="button bg-red" type="submit"
				>Eliminar</button
			>
		</div>
	</Content>
</Dialog>

<Notification message={requestResponseMessage} />

<style lang="scss">
	.banners-container {
		gap: 20px;
	}
	.banner-item {
		width: 100%;
		box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);
	}

	.banner-item p {
		padding: 10px 20px;
	}

	.banner-image {
		position: relative;
	}

	.banner-image img {
		width: 100%;
		height: 100%;
	}

	.banner-image .edit {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}

	.banner-image .delete {
		position: absolute;
		bottom: 10px;
		right: 110px;
	}
	.edit,
	.delete {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image-container {
		width: 100%;
		height: 80px;
	}
	.banner-preview {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media(max-width: 500px) {
		.edit, .delete {
			height: 20px;
			width: auto;
			padding: 12px 20px;
			.material-icons {
				font-size: 16px;
			}
		}
	}
</style>
