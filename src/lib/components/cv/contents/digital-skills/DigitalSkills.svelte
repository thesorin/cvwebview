<script>
	import Section from '../section/Section.svelte';
	import SectionParagraph from '../section/SectionParagraph.svelte';

	const margin = '0 0 0.5em 0';

	const webSkills = [
		'Typescript',
		'ECMAScript (ES/Javascript)',
		'HTML5',
		'CSS/SCSS/SASS',
		'NodeJs',
		'WebComponents',
		'JSON',
		'REST API',
		'AngularJs',
		'ReactJs',
		'Svelte',
		'SvelteKit',
		'Shadow DOM',
		'Vite',
		'Vitest',
		'Git',
		'Agile (Scrum)',
		'Kanban'
	];

	const limitedWebSkills = ['Angular 2+', 'Vue'];

	const computerSkills = [
		'Jira',
		'Microst Office',
		'Google Workspace: Docs, Sheet, etc.',
		'Outlook'
	];
</script>

<Section title="Digital skills">
	<h3>Web Development</h3>
	<SectionParagraph --margin={margin}>
		{webSkills.join(', ')}
	</SectionParagraph>

	<h3>Limited Knowledge for Web Development</h3>
	<SectionParagraph --margin={margin}>
		{limitedWebSkills.join(', ')}
	</SectionParagraph>

	<h3>General Computer Skills</h3>
	<SectionParagraph --margin={margin}>
		{computerSkills.join(', ')}
	</SectionParagraph>
</Section>

<style>
	h3 {
		font-size: 1em;
		font-weight: 600;
		margin-bottom: 0.5em;
	}
</style>
