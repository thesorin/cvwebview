<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Web Application Engineer"
	subtitle="@ Airtame | Contractor"
	startDate={new Date(2022, 4, 16)}
	location="Remote, Denmark"
>
	<SectionParagraph
		>At Airtame, I have two projects that I work on. Initially I was helping out the team on the
		main conferencing project, written in React 18+ with Typescript and scss. The project itself was
		composed from 2 web applications, one running in Electron and the other one running on the
		device designed by Airtame. Over time, while business has grown, a new project was setup by the
		team and I inherited the role of taking over as main mainteiner and devleoper on it, a
		application wirtten for the browser to be used along with Airtame devices.
	</SectionParagraph>
	<SectionParagraph>
		The core responsabilies I have at Airtame are:
		<SectionUl>
			<SectionLi>Develop and implement software features from UX team</SectionLi>
			<SectionLi>Maintain, update and contribute to main codebase of the two projects</SectionLi>
			<SectionLi>Write unit test and storybook scenarios.</SectionLi>
			<SectionLi>Fix bugs present in existing codebase as well as new discovered ones.</SectionLi>
			<SectionLi>Contribute to company's common components library.</SectionLi>
			<SectionLi>Participate in hiriing interviews.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		And the techonologies used:
		<SectionUl>
			<SectionLi>Frontend framework: React 18+ with Typescript and SCSS.</SectionLi>
			<SectionLi>Tools used: Vite, esbuild, webpack, Storybook 6</SectionLi>
			<SectionLi>Testing framework: Vitest, Jest.</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
