<script>
	import HeaderMainImage from './Image.svelte';
	import HeaderMainInfo from './Info.svelte';
</script>

<section>
	<HeaderMainImage />
	<HeaderMainInfo />
</section>

<style>
	section {
		height: 12rem;
		display: flex;
		background-color: rgba(145, 145, 145, 0.226);
		width: var(--column);
		justify-content: space-between;
		margin: auto;
	}
</style>
