<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';
	import { slide } from 'svelte/transition';

	export let title: string;
	let expanded = true;

	$: id = title.replace(/\s/g, '').toLocaleLowerCase().toString();
</script>

<SectionTitle {title} on:expand={() => (expanded = !expanded)} {expanded} />

{#if expanded}
	<div {id} transition:slide|local={{ duration: 250 }}>
		<slot />
	</div>
{/if}

<style>
	div {
		margin: 0 var(--side);
	}
</style>
