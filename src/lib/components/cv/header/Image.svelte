<script lang="ts">
    import src from '$lib/assets/cvpic.webp';
</script>

<div>
    <img {src} alt="Picuture of Sorin Mihai Broscaru">
</div>

<style>
    div {
        height: 100%;
        display: flex;
        align-items: center;
        padding: calc(var(--side) * 2) var(--side);
        aspect-ratio: 3/4;
    }
    img {
        height: 90%;
        border-radius: 50%;
        border: 1px solid rgb(182, 182, 182);
        filter: drop-shadow(1px 1px 5px black);
    }
</style>