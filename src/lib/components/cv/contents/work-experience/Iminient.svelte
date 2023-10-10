<script>
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import SectionUl from '../section/SectionUl.svelte';
	import SectionLi from '../section/SectionLi.svelte';
	import SubSection from '../section/SubSection.svelte';
</script>

<SubSection
	title="QA Analist"
	subtitle="@ Iminent Technology SRL"
	startDate={new Date(2014, 7, 31)}
	endDate={new Date(2015, 8, 31)}
	location="Bucharest, Romania"
>
	<SectionParagraph>
		During my work time at Iminent Technology, my main responsibilities were to test the web
		application the company has developed and maintained and also to test other applications the
		company was developing. Thus my main duties were to:
		<SectionUl>
			<SectionLi>Run the regression test cases</SectionLi>
			<SectionLi>Maintain and update regression tests written for the web application.</SectionLi>
			<SectionLi>Ensure top quality of the applications.</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		I have learned a lot of new skills, mostly related to software testing, web applications testing
		and tools used for testing. I have gathered exprience in:
		<SectionUl>
			<SectionLi>Using the developer console to debug HTTP calls to server.</SectionLi>
			<SectionLi>
				Using Fiddler and Wireshark tools to watch for communication of the desktop applications
				developed by the company and the online servers.
			</SectionLi>
			<SectionLi>
				Using Virtual Machines ( VmWare ) to test the applications within isolated enviroments.
			</SectionLi>
		</SectionUl>
	</SectionParagraph>
	<SectionParagraph>
		It was during this time when I first started to tinker with programming. It was because of an
		online training for Selenium using C#, and I started working with it more and more. While doing
		this, I had become interested as well in HTML, CSS and Javascript.
	</SectionParagraph>
</SubSection>
