<script lang="ts">
	import EmailAdress from './EmailAdress.svelte';
	import InfoItem from './InfoItem.svelte';
	import PhoneNumberWithFlag from './PhoneNumberWithFlag.svelte';
</script>

<div class="info">
	<h1 class="name">Broscaru Sorin Mihai</h1>
	<hr />
	<div class="quick">
		<InfoItem label="Date of birth" value="20.03.1990" />
		<InfoItem label="Nationality" value="Romanian" />
		<InfoItem label="Phone number" value={PhoneNumberWithFlag} hidden />
		<InfoItem label="Email adress" value={EmailAdress} hidden />
		<address>
			<InfoItem label="Adress" value="Calea Cisnadiei 3, Sibiu, Romania ( Home )" />
		</address>
	</div>
</div>

<style>
	.info {
		flex: 1;
		padding: var(--side);
	}

	hr {
		border: 1px solid var(--divider-color);
		margin: var(--half-side) 0;
	}

	.name {
		margin: var(--half-side) 0;
		/* margin: 0; */
	}

	.quick {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}
</style>
