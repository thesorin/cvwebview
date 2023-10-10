<script lang="ts">
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Online courses"
	subtitle="Pluralsight | Frontend Masters"
	startDate={new Date(2016, 4, 16)}
	location="Online"
>
	<SectionParagraph>
		For Pluralsight profile
		<a href="https://app.pluralsight.com/profile/sorinbroscaru">
			https://app.pluralsight.com/profile/sorinbroscaru
		</a>
		<br />
		For Frontend Masters profile
		<a href="https://frontendmasters.com/u/thesorin/">https://frontendmasters.com/u/thesorin/</a>
	</SectionParagraph>
</SubSection>

<style>
	a {
		text-decoration: none;
		color: navy;
	}
</style>
