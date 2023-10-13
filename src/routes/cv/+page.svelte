<script>
	import Contents from '$lib/components/cv/contents/Contents.svelte';
	import Header from '$lib/components/cv/header/Header.svelte';
	import favicon from '$lib/assets/favicon.ico';
</script>

<div class="column cv">
	<Header />
	<Contents />
</div>

<svelte:head>
	<title>Broscaru Sorin Mihai Curriculum Vitae</title>
	<link rel="icon" href={favicon} />
	<meta charset="UTF-8" />
	<meta name="keywords" content="CV, Sorin Mihai Broscaru, Broscaru, Sorin Broscaru" />
	<meta name="description" content="Sorin Mihai Broscaru Curriculum Vitae" />
	<meta name="author" content="Sorin Mihai Broscaru" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<style>
	.cv {
		display: flex;
		flex-direction: column;
		margin: auto;
		height: 100%;
	}
</style>
