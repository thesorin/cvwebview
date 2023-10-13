<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="Front End Devleoper"
	subtitle="@ IMC Ag"
	startDate={new Date(2017, 9, 30)}
	endDate={new Date(2018, 7, 5)}
	location="Sibiu, Romania"
>
	<SectionParagraph>
		Starting from October 2017, I had applied internally for the open position of Front End
		Developer at the IMC. After changing from QA to Fronte End developer position, my main
		responsibilities As following:
		<SectionUl>
			<SectionLi>
				Implementing and developing exiting features as well as new features in the portal
				application.
			</SectionLi>
			<SectionLi>Fixing issues discovered during testing phase or reported by users.</SectionLi>
			<SectionLi>
				Cooperating close with the team to ensure sprint goals and tasks are completed.
			</SectionLi>
			<SectionLi>Writing unit tests.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		Technologies used during the project:
		<SectionUl>
			<SectionLi>
				As core language & framework: Javascript ES6/ESNext, AngularJS (v1.x), SCSS
			</SectionLi>
			<SectionLi>As libraries: Foundation 6 ( SCSS library )</SectionLi>
			<SectionLi>As testing framework: Mocha, Karma & Chai</SectionLi>
		</SectionUl>
	</SectionParagraph>
</SubSection>
