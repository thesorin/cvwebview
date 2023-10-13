<script lang="ts">
	import { onKeyUp } from '$lib/helpers/quickEvents';
	import { createEventDispatcher } from 'svelte';

	export let title: string;

	export let expanded: boolean;

	const dispatch = createEventDispatcher();
	const onAction = () => dispatch('expand');
</script>

<h2>
	{title}
	<icon
		class:collapsed={!expanded}
		on:click={onAction}
		on:keyup={onKeyUp(onAction, ['Enter', 'Space'])}
		role="button"
		tabindex="0">▼</icon
	>
</h2>

<style>
	h2 {
		--left-right: 0.5em;
		margin: 0.5em var(--side) var(--side) var(--side);
		border-bottom: 2px solid var(--divider-color);
		line-height: 1.5em;
		text-transform: uppercase;
		font-size: 1.2em;
		margin-bottom: var(--side);
	}

	h2::before {
		content: '• ';
		position: absolute;
		left: -0.5em;
		opacity: 0.5;
	}

	h2:not(:first-child) {
		margin-top: 2rem;
	}

	icon {
		position: absolute;
		right: 0;
		line-height: 1em;
		cursor: pointer;
		transition: transform 250ms ease-in-out;
		user-select: none;
	}

	.collapsed {
		transform: rotate(-90deg);
	}

	@keyframes collapse {
		100% {
			transform: rotate(-90deg);
		}
	}
</style>
