<script lang="ts">
	import { page } from '$app/stores';
	import { navLinks, siteConfig } from '$lib/data';

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let scrollProgress = $state(0);

	function handleScroll() {
		scrolled = window.scrollY > 20;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<!-- Scroll Progress Bar -->
<div id="scroll-progress" style="width: {scrollProgress}%" role="progressbar" aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Page scroll progress"></div>

<!-- Navigation -->
<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-neutral-100'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2.5 text-xl font-bold" aria-label="{siteConfig.name} home">
			<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm shadow-md">
				UP
			</span>
			<span class="{scrolled ? 'text-neutral-900' : 'text-white'} transition-colors font-heading">
				{siteConfig.name}
			</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
						{$page.url.pathname === link.href
							? scrolled
								? 'text-primary-600 bg-primary-50'
								: 'text-white bg-white/15'
							: scrolled
								? 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
								: 'text-white/80 hover:text-white hover:bg-white/10'}"
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Toggle -->
		<button
			class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden
				{scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'}"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-expanded={mobileOpen}
			aria-controls="mobile-menu"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
		>
			{#if mobileOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div
			id="mobile-menu"
			class="border-t border-neutral-100 bg-white/95 backdrop-blur-xl md:hidden"
			role="navigation"
			aria-label="Mobile navigation"
		>
			<div class="flex flex-col gap-1 px-6 py-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="rounded-lg px-4 py-3 text-base font-medium transition-colors
							{$page.url.pathname === link.href
								? 'bg-primary-50 text-primary-600'
								: 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'}"
						onclick={closeMobile}
						aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
