<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Computer Programmer"
	subtitle="@ Ausy Technologies Romania"
	startDate={new Date(2018, 7, 8)}
	endDate={new Date(2022, 10, 30)}
	location="Sibiu, Romania"
>
	<SectionParagraph>
		At Ausy, I worked as backend developer for the ongoing project with BMW. As backend developer,
		the main responsibilities were:
		<SectionUl>
			<SectionLi>
				Writing/migrating from Java to NodeJS microservices for the cloud application.
			</SectionLi>
			<SectionLi>Fixing issues discovered during testing or reported by users.</SectionLi>
			<SectionLi>
				Connecting the microservice to the application by making the microservice an Docker image
				and spawning it in the Kubernetes cluster. ( Most of the flow is automated, however the
				configuration files need to adaptation for microservice )
			</SectionLi>
			<SectionLi>Writing unit tests for written Javascript code.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		Technologies used during the project:
		<SectionUl>
			<SectionLi>
				As core language & framework: Javascript ES6/ESNext, NodeJs 8.x.x, Docker, Azure Kubernetes
				Service
			</SectionLi>
			<SectionLi>As microservices libraries: ExpressJS, Swagger</SectionLi>
			<SectionLi>As testing framework: Jest</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
