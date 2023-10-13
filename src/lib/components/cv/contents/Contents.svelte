<script>
	import AdditionalInformation from './additional-information/AdditionalInformation.svelte';
	import DigitalSkills from './digital-skills/DigitalSkills.svelte';
	import EducationAndTraining from './education-and-training/EducationAndTraining.svelte';
	import LanguageSkills from './language-skills/LanguageSkills.svelte';
	import WorkExperience from './work-experience/WorkExperience.svelte';
</script>

<main>
	<WorkExperience />
	<EducationAndTraining />
	<LanguageSkills />
	<DigitalSkills />
	<AdditionalInformation />
</main>

<style>
	main {
		flex: 1;
		background-color: rgba(236, 236, 236, 0.25);
	}
</style>
