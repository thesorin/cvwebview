<script lang="ts">
	import { toIsoDate } from '$lib/helpers/dateFormater';
	import hdate from 'human-date';

	export let title: string;
	export let subtitle: string;
	export let startDate: Date;
	export let endDate: undefined | Date = undefined;
	export let location: string;
	export let dateAsYear: boolean = false;

	$: startDateHuman = dateAsYear ? startDate.getFullYear() : hdate.prettyPrint(startDate);
	$: endDateHuman = endDate
		? dateAsYear
			? endDate.getFullYear()
			: hdate.prettyPrint(endDate)
		: '';
</script>

<div class="period-location">
	<time datetime={toIsoDate(startDate)}>{startDateHuman}</time>
	{#if endDate}
		-
		<time datetime={toIsoDate(endDate)}>{endDateHuman}</time>
	{:else if !dateAsYear}
		CURRENT
	{/if} | {location}
</div>
<h3>{title}<span>{subtitle}</span></h3>

<slot />

<style>
	div {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.7;
	}
	h3 {
		margin: 0;
		font-size: 1.1rem;
		border-bottom: 1px solid var(--divider-color);
		margin-bottom: var(--side);
		display: flex;
		align-items: center;
	}

	.period-location:not(:first-child) {
		margin-top: 1.2rem;
	}

	span {
		font-size: 1rem;
		font-weight: normal;
		padding-left: var(--half-side);
	}
</style>
