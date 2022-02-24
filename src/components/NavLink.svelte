<script lang="ts">
	import { page } from '$app/stores';

	export let iconName: string = '';
	export let labelName: string = '';
	export let route: string = '';

	let isActive: boolean = false;

	$: isActive = $page.url.pathname.includes(route);
</script>

<div class="nav-item flex-column center">
	<a href={route} class="nav-button flex-row center" class:active={isActive}>
		<span class="material-icons"> {iconName} </span>
	</a>
	<p>{labelName}</p>
</div>

<style lang="scss">
	.nav-item {
		p {
			font-size: 12px;
		}
	}
	.material-icons {
		color: var(--darker-gray);
		font-size: 24px;
		transition: all 0.5s ease;
	}
	a {
		text-decoration: none;
	}
	.nav-button {
		background-color: var(--off-white);
		padding: 10px;
		border-radius: 5px;
		transition: all 0.5s ease;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
		margin-bottom: 5px;
	}
	.nav-button:hover {
		background-color: var(--yellow);
		.material-icons {
			color: white;
		}
	}
    .active {
        background-color: var(--yellow);
    }
</style>
