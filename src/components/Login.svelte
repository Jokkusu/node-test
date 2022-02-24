<script lang="ts">
	import { LoginModel } from '../models/authentication/LoginModel';
	import { userLogin, adminLogin } from '../services/domain/authentication/Login';
	import { setCookie } from '../services/dev/cookies/Cookies';
	import Notification from './Notification.svelte';

	let loginModel = new LoginModel(undefined, '');
	let validLoginForm: boolean = false;
	let requestResponseMessage: string = '';

	function togglePasswordVisibility(): void {
		let passwordInput: HTMLInputElement = <HTMLInputElement>(
			document.getElementById('passwordInputLogin')
		);
		let visibilityIcon: HTMLElement = document.getElementById('visibilityIcon');
		if (passwordInput.type == 'password') {
			passwordInput.type = 'text';
			visibilityIcon.textContent = 'visibility_off';
		} else {
			passwordInput.type = 'password';
			visibilityIcon.textContent = 'visibility';
			document.getElementById('visibilityIcon').textContent = 'visibility';
		}
	}

	const AUTH_TOKEN_NAME: string = 'token';
	const AUTH_TOKEN_EXPIRATION_IN_DAYS: number = 2;

	async function login(): Promise<void> {
		let attemptAdminLogin: boolean = window.location.pathname.includes('admin');
		let doLogin = (loginModel: LoginModel) =>
			attemptAdminLogin ? adminLogin(loginModel) : userLogin(loginModel);
		try {
			let res = await doLogin(loginModel);
			setCookie(AUTH_TOKEN_NAME, res.token, AUTH_TOKEN_EXPIRATION_IN_DAYS);
			window.location.reload();
		} catch (error) {
			requestResponseMessage = error;
			console.log(error);
		}
	}

	const DOCUMENT_MIN_LENGHT: number = 6;
	const PASSWORD_MIN_LENGHT: number = 8;

	$: {
		validLoginForm =
			loginModel.document > DOCUMENT_MIN_LENGHT && loginModel.password.length > PASSWORD_MIN_LENGHT;
	}
</script>

<div class="login-container">
	<h1 class={$$props.class}>Ingresar</h1>
	<div class="line-decorator bg-yellow" />
	<form class="flex-column center">
		<div class="form-group">
			<p>Cédula</p>
			<input bind:value={loginModel.document} class="underlined-input" type="number" />
		</div>
		<div class="form-group">
			<p>Contraseña</p>
			<div class="password-container">
				<input
					bind:value={loginModel.password}
					id="passwordInputLogin"
					class="underlined-input"
					type="password"
				/>
				<button
					id="visibilityIcon"
					class="material-icons"
					on:click|preventDefault={togglePasswordVisibility}>visibility</button
				>
			</div>
		</div>
		<button
			on:click|preventDefault={login}
			disabled={!validLoginForm}
			class="button bg-yellow"
			type="submit">Iniciar Sesión</button
		>
	</form>
</div>

<Notification message={requestResponseMessage} />

<style lang="scss">
	form {
		margin-top: 60px;
	}

	h1 {
		color: black;
	}

	.password-container {
		position: relative;
		.underlined-input {
			padding-right: 32px;
		}
		.material-icons {
			margin: 0;
			position: absolute;
			right: 8px;
			color: gray;
			font-size: 18px;
		}
	}
</style>
