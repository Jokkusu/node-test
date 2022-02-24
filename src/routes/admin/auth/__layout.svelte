<script lang="ts">
	import { getCookie } from '../../../services/dev/cookies/Cookies';
	import { onMount } from 'svelte';
	import { environment } from '../../../environment';

	let isLoggedIn: boolean = false;

	onMount(() => {
		isLoggedIn = getCookie(environment.AUTH_TOKEN_NAME) != '';
	});
</script>

<div class="flex-row center">
	<div class="left">
		{#if isLoggedIn}
			<p>Usuario inició sesión correctamente</p>
		{/if}
		<slot />
	</div>
	<div class="right" />
</div>

<style lang="scss">
	.left {
		background-color: var(--light-gray);
		min-height: 100vh;
		width: 40%;
		padding: 40px 50px;
	}

	.right {
		background-color: var(--yellow);
		min-height: 100vh;
		width: 60%;
		padding: 40px 50px;
	}
	@media (max-width: 600px) {
		.left {
			width: 100%;
		}

		.right {
			display: none;
		}
	}
</style>
