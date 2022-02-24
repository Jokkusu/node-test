<script lang="ts">
	import IconButton from '@smui/icon-button';
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import { Label } from '@smui/common';
	import type { CompanyModel } from '../../../models/companies/CompanyModel';
	import Dialog from '@smui/dialog/src/Dialog.svelte';
	import { Content } from '@smui/dialog';
	import {
		getCompanies,
		createCompany,
		editCompany,
		disableCompany
	} from '../../../services/domain/company/Company';
	import Notification from '../../../components/Notification.svelte';
	import {
		textValidation,
		numberValidation,
		emailValidation,
		requiredValidation
	} from '../../../utils/InputValidation';
	import { CompanyCreationAndEditModel } from '../../../models/companies/CompanyCreationAndEditModel';

	let companiesList: CompanyModel[] = [];
	let rowsPerPage = 10;
	let currentPage = 0;

	let activeCreateCompanyDialog: boolean = false;
	let companyCreationModel: CompanyCreationAndEditModel = new CompanyCreationAndEditModel(
		'',
		undefined,
		'',
		null
	);
	let validCompanyCreationForm: boolean = false;

	let requestResponseMessage: string = '';

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

	async function _createCompany(): Promise<void> {
		try {
			let res = await createCompany(companyCreationModel);
			requestResponseMessage = res.Message;
			activeCreateCompanyDialog = false;
			_getCompanies();
		} catch (error) {
			requestResponseMessage =
				'Error al crear la empresa, por favor intentelo de nuevo en un momento';
			console.log(error);
		}
	}

	let activeEditCompanyDialog: boolean = false;
	let companyEditModel: CompanyCreationAndEditModel = new CompanyCreationAndEditModel(
		'',
		undefined,
		'',
		null
	);
	let validCompanyEditForm: boolean = false;
	let activeEditCompanyId: string;

	function setUpCompanyEditForm(company: CompanyModel): void {
		companyEditModel = new CompanyCreationAndEditModel(
			company.Name,
			company.NIT,
			company.Email,
			null
		);
		activeEditCompanyId = company.CompanyId;
		activeEditCompanyDialog = true;
		console.log("hello");
	}

	async function _editCompany(): Promise<void> {
		try {
			let res = await editCompany(activeEditCompanyId, companyEditModel);
			requestResponseMessage = res.Message;
			activeEditCompanyDialog = false;
			_getCompanies();
		} catch (error) {
			requestResponseMessage =
				'Error al editar la empresa, por favor intentelo de nuevo en un momento';
			console.log(error);
		}
	}

	function validateCompanyForm(companyModel: CompanyCreationAndEditModel | CompanyModel): boolean {
		return (
			requiredValidation(companyModel.Name) &&
			requiredValidation(companyModel.NIT) &&
			requiredValidation(companyModel.Email) &&
			textValidation(companyModel.Name, 3, 100) &&
			numberValidation(companyModel.NIT, 1, 10) &&
			emailValidation(companyModel.Email)
		);
	}

	let activeDisableCompanyId: string = '';
	let activeDisableCompanyDialog: boolean = false;

	function setUpCompanyDisable(company: CompanyModel) {
		activeDisableCompanyId = company.CompanyId;
		activeDisableCompanyDialog = true;
	}

	async function _disableCompany() {
		try {
			let res = await disableCompany(activeDisableCompanyId);
			requestResponseMessage = res.Message;
			activeDisableCompanyDialog = false;
			_getCompanies();
		} catch (error) {
			requestResponseMessage = 'Error al deshabilitar la empresa, por favor intentelo de nuevo';
			console.log(error);
		}
	}

	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, companiesList.length);
	$: slice = companiesList.slice(start, end);
	$: lastPage = Math.max(Math.ceil(companiesList.length / rowsPerPage) - 1, 0);

	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}

	$: validCompanyCreationForm = validateCompanyForm(companyCreationModel);

	$: validCompanyEditForm = validateCompanyForm(companyEditModel);
</script>

<svelte:head>
	<title>Empresas</title>
</svelte:head>

<div>
	<h1>Empresas</h1>
	<div class="line-decorator bg-yellow" />
</div>
<div class="flex-row center flex-end">
	<button
		class="flex-row center button bg-yellow small"
		on:click={() => (activeCreateCompanyDialog = true)}
	>
		<span class="material-icons">add</span>
		Crear Empresa
	</button>
</div>

<div class="companies-list">
	<DataTable table$aria-label="Companies list" style="max-width: 100%; width:100%">
		<Head>
			<Row>
				<Cell>Nombre</Cell>
				<Cell>NIT</Cell>
				<Cell>Correo</Cell>
				<Cell>Acciones</Cell>
			</Row>
		</Head>
		<Body>
			{#each slice as company}
				{#if company.CompanyState == 1}
					<Row>
						<Cell>{company.Name}</Cell>
						<Cell>{company.NIT}</Cell>
						<Cell>{company.Email}</Cell>
						<Cell>
							<div class="flex-row center" style="gap: 10px;">
								<button
									class="flex-row center button bg-yellow icon-button"
									on:click={() => setUpCompanyEditForm(company)}
									><span class="material-icons"> edit </span>
								</button>
								<button
									class="flex-row center button bg-red icon-button"
									on:click={() => setUpCompanyDisable(company)}
									><span class="material-icons"> delete </span>
								</button>
							</div>
						</Cell>
					</Row>
				{/if}
			{/each}
		</Body>
		<Pagination slot="paginate">
			<svelte:fragment slot="rowsPerPage">
				<Label>Rows Per Page</Label>
				<Select variant="outlined" bind:value={rowsPerPage} noLabel>
					<Option value={10}>10</Option>
					<Option value={25}>25</Option>
					<Option value={100}>100</Option>
				</Select>
			</svelte:fragment>
			<svelte:fragment slot="total">
				{start + 1}-{end} of {companiesList.length}
			</svelte:fragment>

			<IconButton
				class="material-icons"
				action="first-page"
				title="First page"
				on:click={() => (currentPage = 0)}
				disabled={currentPage === 0}>first_page</IconButton
			>
			<IconButton
				class="material-icons"
				action="prev-page"
				title="Prev page"
				on:click={() => currentPage--}
				disabled={currentPage === 0}>chevron_left</IconButton
			>
			<IconButton
				class="material-icons"
				action="next-page"
				title="Next page"
				on:click={() => currentPage++}
				disabled={currentPage === lastPage}>chevron_right</IconButton
			>
			<IconButton
				class="material-icons"
				action="last-page"
				title="Last page"
				on:click={() => (currentPage = lastPage)}
				disabled={currentPage === lastPage}>last_page</IconButton
			>
		</Pagination>
	</DataTable>
</div>

<Notification message={requestResponseMessage} />

<!-- Create Company Dialog -->
<Dialog
	bind:open={activeCreateCompanyDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeCreateCompanyDialog = false)} class="material-icons"
				>close</button
			>
		</div>
		<div style="padding: 10px;">
			<div style="color: black; margin-bottom: 20px">
				<h1>Crear Empresa</h1>
				<div class="line-decorator bg-yellow" />
			</div>
			<form class="flex-column center">
				<div class="form-group">
					<p>Nombre</p>
					<input bind:value={companyCreationModel.Name} class="underlined-input" type="text" />
				</div>
				<div class="form-group">
					<p>NIT</p>
					<input bind:value={companyCreationModel.NIT} class="underlined-input" type="number" />
				</div>
				<div class="form-group">
					<p>Correo</p>
					<input bind:value={companyCreationModel.Email} class="underlined-input" type="email" />
				</div>
				<button
					on:click|preventDefault={_createCompany}
					disabled={!validCompanyCreationForm}
					class="button bg-yellow"
					type="submit">Crear</button
				>
			</form>
		</div>
		<div class="center-text" />
	</Content>
</Dialog>

<!-- Edit Company Dialog -->
<Dialog
	bind:open={activeEditCompanyDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeEditCompanyDialog = false)} class="material-icons"
				>close</button
			>
		</div>
		<div style="padding: 10px;">
			<div style="color: black; margin-bottom: 20px">
				<h1>Editar Empresa</h1>
				<div class="line-decorator bg-yellow" />
			</div>
			<form class="flex-column center">
				<div class="form-group">
					<p>Nombre</p>
					<input bind:value={companyEditModel.Name} class="underlined-input" type="text" />
				</div>
				<div class="form-group">
					<p>NIT</p>
					<input bind:value={companyEditModel.NIT} class="underlined-input" type="number" />
				</div>
				<div class="form-group">
					<p>Correo</p>
					<input bind:value={companyEditModel.Email} class="underlined-input" type="email" />
				</div>
				<button
					on:click|preventDefault={_editCompany}
					disabled={!validCompanyEditForm}
					class="button bg-yellow"
					type="submit">Editar</button
				>
			</form>
		</div>
		<div class="center-text" />
	</Content>
</Dialog>

<!-- Disable company dialog-->
<Dialog
	bind:open={activeDisableCompanyDialog}
	surface$style="width: 400px; max-width: calc(100vw - 32px);"
>
	<Content>
		<div class="flex-row flex-end">
			<button on:click={() => (activeDisableCompanyDialog = false)} class="material-icons"
				>close</button
			>
		</div>
		<h1 style="color: black;">Deshabilitar Empresa</h1>
		<div class="line-decorator bg-yellow" />
		<div class="flex-row justify-center" style="color: black; margin:20px">
			¿Está seguro de que desea deshabilitar la empresa?
		</div>
		<div class="center-text">
			<button on:click|preventDefault={_disableCompany} class="button bg-red" type="submit"
				>Deshabilitar</button
			>
		</div>
	</Content>
</Dialog>

<style lang="scss">
	.line-decorator {
		margin-top: 10px;
	}

	button {
		gap: 5px;
		.material-icons {
			font-size: 16px;
		}
	}

	.companies-list {
		margin-top: 20px;
	}
</style>
