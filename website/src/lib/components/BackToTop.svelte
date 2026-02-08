<script lang="ts">
	let showBtn = $state(false);

	function handleScroll() {
		showBtn = window.scrollY > 500;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button
	class="back-to-top {showBtn ? 'shown' : ''}"
	onclick={scrollToTop}
	aria-label="Scroll back to top"
	type="button"
>
	<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
		<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
	</svg>
</button>
