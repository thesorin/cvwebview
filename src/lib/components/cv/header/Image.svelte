<script lang="ts">
	const src = `https://www.gravatar.com/avatar/db976802ed381464ef3601f68b85df71?s=500`;
</script>

<div>
	<img {src} alt="Sorin Mihai Broscaru" />
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
		border: 1px solid rgba(54, 54, 54, 0.37);
		filter: drop-shadow(5px 5px 50px rgba(0, 0, 0, 0.7));
	}
	@media print {
		img {
			filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));
		}
	}
</style>
