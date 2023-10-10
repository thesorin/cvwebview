<script>
	import Contents from '$lib/components/cv/contents/Contents.svelte';
	import Header from '$lib/components/cv/header/Header.svelte';
</script>

<div class="column cv">
	<Header />
	<Contents />
</div>

<!-- <footer>Footer</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		height: 5rem;
		background-color: blue;
		width: var(--column);
	}
</style> -->

<svelte:head>
	<title>Broscaru Sorin Mihai Curriculum Vitae</title>
</svelte:head>

<style>
	.cv {
		display: flex;
		flex-direction: column;
		margin: auto;
		height: 100%;
	}
</style>
