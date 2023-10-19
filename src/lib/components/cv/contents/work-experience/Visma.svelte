<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Front-end Developer"
	subtitle="@ Visma Software SRL"
	startDate={new Date(2018, 10, 31)}
	endDate={new Date(2022, 4, 13)}
	location="Sibiu, Romania"
>
	<SectionParagraph
		>At Visma, I was responsible for two projects: one is inherited (legacy code) in AngularJS
		v1.x.x and the other one was a brand new project, developed past year and it's mainly developed
		with Svelte as framework. My main responsibility have been to:
		<SectionUl>
			<SectionLi>
				Implement designs provided by UI/UX Department into web page application:
				<SectionUl>
					<SectionLi>Write component logic in AngularJS/Svelte with Typescript.</SectionLi>
					<SectionLi>Implementing the designs via CSS and HTML.</SectionLi>
					<SectionLi
						>Create inhouse plugins to adopt JS and/or CSS output to specific business requirements.</SectionLi
					>
				</SectionUl>
			</SectionLi>
			<SectionLi
				>Improve existing application/code and build process as well as optimizing the application
				itself.</SectionLi
			>
			<SectionLi>
				Fixing older bugs as well as new reported bugs from both support teams but also from the the
				QA process.
			</SectionLi>
			<SectionLi
				>Cooperate with the Technical Quality Assurance person to optimize and improve Selenium
				Tests</SectionLi
			>
			<SectionLi>Help develop the end 2 end testing projects for the projects.</SectionLi>
			<SectionLi
				>Work with the other team developers to implement REST API into the web user interface.</SectionLi
			>
			<SectionLi>Improve unit testing of the application and it's components.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		Technologies used during the project:
		<SectionUl>
			<SectionLi>As core language & framework: Typescript, HTML, SCSS.</SectionLi>
			<SectionLi
				>As libraries and tools: Svelte, angularJS 1.x, Svelte, scss, gulp, PostCSS, webdriverio</SectionLi
			>
			<SectionLi>As testing framework: Moca and Karma</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
