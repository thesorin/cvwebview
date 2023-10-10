<script lang="ts">
	import type { LanguageLevel } from './language';

	export let language: string;
	export let listening: LanguageLevel;
	export let reading: LanguageLevel;
	export let spokenProduction: LanguageLevel;
	export let spokenInteraction: LanguageLevel;
	export let writing: LanguageLevel;
</script>

<tr>
	<td colspan="2" class="lang">{language}</td>
	<td>{listening}</td>
	<td>{reading}</td>
	<td>{reading}</td>
	<td>{spokenProduction}</td>
	<td>{spokenInteraction}</td>
	<td>{writing}</td>
</tr>

<style>
	td {
		width: 25%;
		text-align: center;
	}
	.lang {
		text-align: left;
		font-weight: 800;
	}
	tr:nth-child(odd) {
		background-color: rgba(226, 226, 226, 0.685);
	}
	td:not([colspan='2']) {
		width: 12.5%;
	}
</style>
