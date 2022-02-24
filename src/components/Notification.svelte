<script lang="ts">
	import Snackbar, { SnackbarComponentDev, Label } from '@smui/snackbar';
	import { secondsToMs } from '../utils/secondsToMs';

	export let message: string = '';
	let displayedMessage: string = '';

	const DISMISS_SECONDS: number = 8;
	const DISMISS_MS: number = secondsToMs(DISMISS_SECONDS);

	let messageSnackbar: SnackbarComponentDev;

	$: {
		if (message != displayedMessage && messageSnackbar != undefined) {
			displayedMessage = message;
			messageSnackbar.open();
		}
	}
</script>

<Snackbar bind:this={messageSnackbar} timeoutMs={DISMISS_MS}>
	<Label>{displayedMessage}</Label>
</Snackbar>
