<script>
	import Section from '../section/Section.svelte';
	import SectionParagraph from '../section/SectionParagraph.svelte';
	import LanguageEntry from './LanguageEntry.svelte';
	import LanguageMatrix from './LanguageMatrix.svelte';
	import { LanguageLevel } from './language';
</script>

<Section title="Language Skills">
	<SectionParagraph>
		Mother tongue(s): <b>Romanian</b>
	</SectionParagraph>
	<SectionParagraph>
		Other language(s):
		<LanguageMatrix>
			<LanguageEntry
				language="English"
				listening={LanguageLevel.C2}
				reading={LanguageLevel.C2}
				spokenProduction={LanguageLevel.C2}
				spokenInteraction={LanguageLevel.C2}
				writing={LanguageLevel.C2}
			/>
		</LanguageMatrix>
	</SectionParagraph>
</Section>
