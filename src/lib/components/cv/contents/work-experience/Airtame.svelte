<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Web Application Consultant"
	subtitle="@ Airtame | Contractor"
	startDate={new Date(2022, 4, 16)}
	location="Remote, Denmark"
>
	<SectionParagraph>
		At Airtame, I have two projects that I work on. Initially, I was helping out the team on the
		main conferencing project, written in React 18+ with Typescript and SCSS. The project itself was
		composed of several web applications, but it was mainly split into two logical parts, one
		running in Electron as an interface for the user to control the device, and the other one
		running on the device designed by Airtame. Over time, with the business growing, a new project
		that runs strictly in the browser and it was created so that, in time, it would take over the
		application that runs in Electron. For this newer project, I took over as the main maintainer
		and further develop functionality.
	</SectionParagraph>
	<SectionParagraph>
		The core responsibilities I have at Airtame are:
		<SectionUl>
			<SectionLi>Develop and implement software features from UX team</SectionLi>
			<SectionLi>
				Maintain, update, and contribute to the main codebase of the two projects
			</SectionLi>
			<SectionLi>Write unit test and storybook scenarios.</SectionLi>
			<SectionLi>
				Fix bugs present in the existing codebase as well as newly discovered ones.
			</SectionLi>
			<SectionLi>Contribute to the company's common components library.</SectionLi>
			<SectionLi>Participate in hiriing interviews.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		And the technologies used:
		<SectionUl>
			<SectionLi>Frontend framework: React 18+ with Typescript and SCSS.</SectionLi>
			<SectionLi>Tools used: Vite, Esbuild, Webpack, Storybook 6</SectionLi>
			<SectionLi>Testing framework: Vitest, Jest.</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
