<script lang="ts">
	import { onKeyUp } from '$lib/helpers/quickEvents';
	import type { SvelteComponent } from 'svelte';

	export let label: string;
	export let value: string | typeof SvelteComponent<{}>;
	export let hidden: boolean = false;

	const onActivation = onKeyUp(() => {
		hidden = true;
	}, ['Enter', 'Spacebar']);
</script>

<div class="item">
	<span class="label">{@html label}:</span>
	{#if hidden}
		<span
			class="actionable"
			on:keyup={onActivation}
			tabindex="0"
			role="button"
			on:click={() => (hidden = false)}
		>
			<i>click to reveal</i>
		</span>
	{:else if typeof value !== 'string'}
		<svelte:component this={value} />
	{:else}
		{value.toString()}
	{/if}
</div>

<style>
	.actionable {
		cursor: pointer;
		text-decoration: dashed;
		font-weight: 500;
	}

	.item {
		flex: 1 0 33%;
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	.label {
		font-weight: 600;
		text-transform: uppercase;
	}
</style>
