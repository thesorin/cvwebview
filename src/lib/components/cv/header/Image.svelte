<script lang="ts">
	const src = `https://www.gravatar.com/avatar/db976802ed381464ef3601f68b85df71?s=500`;
</script>

<div>
	<img {src} alt="Picuture of Sorin Mihai Broscaru" />
</div>

<style>
	div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: calc(var(--side) * 2) var(--side);
		aspect-ratio: 1;
	}
	img {
		height: 90%;
		border-radius: 50%;
		border: 1px solid rgb(182, 182, 182);
		filter: drop-shadow(1px 1px 5px black);
	}
</style>
