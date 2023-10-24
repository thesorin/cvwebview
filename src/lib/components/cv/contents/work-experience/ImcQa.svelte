<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Software QA Professional"
	subtitle="@ IMC Ag"
	startDate={new Date(2015, 9, 30)}
	endDate={new Date(2017, 9, 30)}
	location="Sibiu, Romania"
>
	<SectionParagraph>
		As a QA Software Professional at IMC AG, I had the main responsibility of ensuring the quality
		of the web application developed and maintained by the company, doing this meant that I had to:
		<SectionUl>
			<SectionLi>
				Write regression test cases for the developed feature of the application.
			</SectionLi>
			<SectionLi>Maintain, adjust, and update old test cases.</SectionLi>
			<SectionLi>Run the regression tests on the online platforms during QA Phases.</SectionLi>
			<SectionLi>Work closely with the developer to reproduce and help fix found issues.</SectionLi>
			<SectionLi>
				Provide input over user experience of the product and newly implemented features to the
				product manager.
			</SectionLi>
			<SectionLi>Work Agile within a development team in Sprints of 2 weeks in length.</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
