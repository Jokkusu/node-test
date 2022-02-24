<svelte:head>
	<title>Recuperar Contraseña</title>
</svelte:head>

<a href="/admin/auth"><span class="material-icons"> arrow_back </span></a>
<h1>Recuperar Contraseña</h1>
<div class="line-decorator bg-yellow" />
<form class="flex-column center">
	<div class="form-group">
		<p>Documento</p>
		<input class="underlined-input" type="number" />
	</div>
	<button class="button bg-yellow" type="submit">Recuperar</button>
</form>

<style lang="scss">
	form {
		margin-top: 60px;
	}
	
	h1 {
		margin-top: 90px;
	}
</style>
