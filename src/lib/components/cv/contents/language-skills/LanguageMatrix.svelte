<table>
	<thead>
		<tr>
			<th colspan="2">Language</th>
			<th colspan="2">Understanding</th>
			<th colspan="2">Speaking</th>
			<th colspan="2">Writing</th>
		</tr>
		<tr class="subheader">
			<th colspan="2" />
			<th>Listening</th>
			<th>Reading</th>
			<th>Spoken Production</th>
			<th>Spoken Interaction</th>
			<th colspan="2" />
		</tr>
	</thead>
	<tbody>
		<slot />
	</tbody>
	<caption
		>Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user</caption
	>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	tr {
		border-bottom: 1px solid var(--divider-color);
	}

	table :global(tr) {
		line-height: 2em;
	}

	table :global(tr td) {
		padding: 0 0.5em;
	}

	.subheader th {
		font-weight: normal;
	}
	caption {
		caption-side: bottom;
		text-align: left;
		font-weight: 400;
		font-style: italic;
		padding: 0.2em;
		opacity: 0.7;
	}
</style>
