<script lang="ts">
	import { animateOnScroll, animateCounter } from '$lib/actions';
	import { siteConfig, stats, features, testimonials } from '$lib/data';
	import Card from '$lib/components/Card.svelte';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>{siteConfig.name} — {siteConfig.tagline}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="author" content="{siteConfig.author}" />
	<meta name="generator" content="{siteConfig.credit}" />
	<meta property="og:title" content="{siteConfig.name} — {siteConfig.tagline}" />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=630&fit=crop" />
</svelte:head>

<!-- ===== HERO SECTION ===== -->
<section class="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center" aria-label="Hero">
	<!-- Grid Overlay -->
	<div class="hero-grid absolute inset-0"></div>

	<!-- Glowing Orbs -->
	<div class="glow-orb bg-primary-500 w-96 h-96 -top-20 -left-20 absolute animate-float"></div>
	<div class="glow-orb bg-secondary-400 w-72 h-72 top-1/3 right-10 absolute animate-float-delayed"></div>
	<div class="glow-orb bg-accent-400 w-56 h-56 bottom-20 left-1/4 absolute animate-float-slow"></div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-0">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div>
				<div class="fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm border border-white/10" use:animateOnScroll>
					<span class="h-2 w-2 rounded-full bg-secondary-400 animate-pulse"></span>
					AI-Powered Urban Intelligence
				</div>

				<h1 class="fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl" use:animateOnScroll>
					Building the
					<span class="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
						Intelligent Cities
					</span>
					of Tomorrow
				</h1>

				<p class="fade-up mt-6 max-w-xl text-lg leading-relaxed text-neutral-300" use:animateOnScroll>
					{siteConfig.description}
				</p>

				<div class="fade-up mt-8 flex flex-wrap gap-4" use:animateOnScroll>
					<a href="/infrastructure" class="btn btn-primary">
						Explore Solutions
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
					<a href="/contact" class="btn btn-secondary">
						Get Started
					</a>
				</div>

				<!-- Mini stats -->
				<div class="fade-up mt-12 flex gap-8" use:animateOnScroll>
					<div>
						<div class="text-2xl font-bold text-white" use:animateCounter={{ target: 150, suffix: '+' }}>0</div>
						<div class="text-xs text-neutral-400">Cities Served</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-white" use:animateCounter={{ target: 2, suffix: 'M+' }}>0</div>
						<div class="text-xs text-neutral-400">Sensors Deployed</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-white" use:animateCounter={{ target: 30, suffix: '%' }}>0</div>
						<div class="text-xs text-neutral-400">Energy Saved</div>
					</div>
				</div>
			</div>

			<!-- Right Visual -->
			<div class="fade-right hidden lg:block" use:animateOnScroll>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&h=500&fit=crop"
						alt="A futuristic smart city skyline at twilight with illuminated buildings and connected infrastructure"
						class="rounded-2xl shadow-2xl ring-1 ring-white/10"
						width="700"
						height="500"
						loading="eager"
					/>
					<!-- Floating data card -->
					<div class="absolute -bottom-6 -left-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-500/20">
								<span class="text-secondary-400 text-lg">📊</span>
							</div>
							<div>
								<div class="text-xs text-neutral-400">Real-time Analytics</div>
								<div class="text-sm font-semibold text-white">2.4M data points/sec</div>
							</div>
						</div>
					</div>
					<!-- Floating status card -->
					<div class="absolute -top-4 -right-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20">
								<span class="text-primary-400 text-lg">🌐</span>
							</div>
							<div>
								<div class="text-xs text-neutral-400">Network Status</div>
								<div class="text-sm font-semibold text-secondary-400">All Systems Online</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<svg class="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</section>

<!-- ===== STATS SECTION ===== -->
<section class="relative -mt-12 z-20 mx-auto max-w-6xl px-6" aria-label="Key statistics">
	<div class="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-elevated md:grid-cols-4 md:p-8">
		{#each stats as stat, i}
			<div class="text-center fade-up" style="transition-delay: {i * 100}ms" use:animateOnScroll>
				<div
					class="text-3xl font-extrabold text-primary-600 md:text-4xl"
					use:animateCounter={{ target: stat.value, suffix: stat.suffix, prefix: stat.prefix || '' }}
				>
					0
				</div>
				<p class="mt-1 text-xs text-neutral-500 md:text-sm">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ===== FEATURES SECTION ===== -->
<Section title="Transforming Urban Living" subtitle="Our AI-driven solutions address the most pressing challenges of modern urbanization, from congestion and pollution to energy waste and public safety.">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each features as feature, i}
			<Card
				icon={feature.icon}
				title={feature.title}
				description={feature.description}
				link={feature.link}
				delay={i * 100}
			/>
		{/each}
	</div>
</Section>

<!-- ===== HOW IT WORKS ===== -->
<Section title="How UrbanPulse Works" subtitle="From sensor deployment to actionable insight — our end-to-end platform connects physical infrastructure to intelligent decision-making." dark>
	<div class="grid gap-8 md:grid-cols-3">
		{#each [
			{ step: '01', title: 'Sense & Collect', desc: 'Thousands of IoT sensors embedded in roads, buildings, utilities, and transit systems collect real-time data on everything from air quality to traffic flow.', icon: '📡' },
			{ step: '02', title: 'Analyze & Predict', desc: 'Our AI engine processes millions of data points per second, identifying patterns, predicting failures, and optimizing resource allocation across the city.', icon: '🧠' },
			{ step: '03', title: 'Act & Optimize', desc: 'Automated responses adjust traffic signals, reroute energy, dispatch maintenance crews, and alert citizens — all in real-time for maximum efficiency.', icon: '⚡' }
		] as item, i}
			<div class="fade-up text-center" style="transition-delay: {i * 150}ms" use:animateOnScroll>
				<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-sm border border-white/10">
					{item.icon}
				</div>
				<div class="mb-2 text-xs font-bold uppercase tracking-widest text-primary-400">Step {item.step}</div>
				<h3 class="mb-3 text-xl font-bold text-white">{item.title}</h3>
				<p class="text-neutral-400 leading-relaxed">{item.desc}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ===== SHOWCASE IMAGE ===== -->
<section class="py-20 lg:py-28" aria-label="Smart city showcase">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="fade-left" use:animateOnScroll>
				<img
					src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=700&h=500&fit=crop"
					alt="Aerial view of a modern city with connected infrastructure and green spaces"
					class="rounded-2xl shadow-elevated"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
			<div class="fade-right" use:animateOnScroll>
				<h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
					A Connected Ecosystem for
					<span class="text-primary-600">Sustainable Growth</span>
				</h2>
				<p class="mt-4 text-lg leading-relaxed text-neutral-600">
					UrbanPulse doesn't just monitor cities — it understands them. By integrating transportation, energy, water, and public safety into a single intelligent platform, we enable city planners and administrators to make data-driven decisions that improve quality of life for millions.
				</p>
				<ul class="mt-6 space-y-3">
					{#each ['Real-time visibility across all city systems', 'AI-powered predictions prevent issues before they occur', 'Open data standards ensure interoperability', 'Privacy-first design with edge computing'] as item}
						<li class="flex items-start gap-3 text-neutral-700">
							<svg class="mt-1 h-5 w-5 flex-shrink-0 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							{item}
						</li>
					{/each}
				</ul>
				<a href="/about" class="btn btn-outline mt-8">
					Learn About Our Mission
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<Section title="Trusted by City Innovators" subtitle="Urban planners, infrastructure directors, and innovation labs around the world rely on UrbanPulse to build smarter, more resilient cities.">
	<div class="grid gap-6 md:grid-cols-3">
		{#each testimonials as testimonial, i}
			<TestimonialCard
				quote={testimonial.quote}
				name={testimonial.name}
				role={testimonial.role}
				avatar={testimonial.avatar}
				delay={i * 100}
			/>
		{/each}
	</div>
</Section>

<!-- ===== CTA SECTION ===== -->
<section class="bg-hero-gradient relative overflow-hidden py-20 lg:py-28" aria-label="Call to action">
	<div class="hero-grid absolute inset-0"></div>
	<div class="glow-orb bg-primary-500 w-80 h-80 -top-20 right-20 absolute"></div>
	<div class="glow-orb bg-secondary-400 w-64 h-64 bottom-10 left-10 absolute"></div>

	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h2 class="fade-up text-3xl font-bold text-white sm:text-4xl lg:text-5xl" use:animateOnScroll>
			Ready to Build a Smarter City?
		</h2>
		<p class="fade-up mx-auto mt-4 max-w-2xl text-lg text-neutral-300" use:animateOnScroll>
			Join 150+ cities worldwide that are already transforming urban infrastructure with AI-powered intelligence. Let's shape the future together.
		</p>
		<div class="fade-up mt-8 flex flex-wrap justify-center gap-4" use:animateOnScroll>
			<a href="/contact" class="btn btn-primary text-base px-8 py-4">
				Start Your Smart City Journey
			</a>
			<a href="/analytics" class="btn btn-secondary text-base px-8 py-4">
				See Live Analytics Demo
			</a>
		</div>
	</div>
</section>
