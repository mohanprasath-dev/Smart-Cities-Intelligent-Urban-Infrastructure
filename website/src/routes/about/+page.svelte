<script lang="ts">
	import { animateOnScroll, animateCounter } from '$lib/actions';
	import { siteConfig } from '$lib/data';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>About — {siteConfig.name}</title>
	<meta name="description" content="Learn about UrbanPulse's mission to revolutionize urban infrastructure through AI, IoT, and data-driven intelligence for sustainable, resilient cities." />
	<meta name="author" content="{siteConfig.author}" />
	<meta name="generator" content="{siteConfig.credit}" />
	<meta property="og:title" content="About — {siteConfig.name}" />
	<meta property="og:description" content="Learn about UrbanPulse's mission to revolutionize urban infrastructure through AI, IoT, and data-driven intelligence." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop" />
</svelte:head>

<!-- HERO -->
<section class="bg-hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
	<div class="hero-grid absolute inset-0"></div>
	<div class="glow-orb bg-primary-500 w-80 h-80 -top-10 right-20 absolute"></div>
	<div class="glow-orb bg-secondary-400 w-56 h-56 bottom-10 left-20 absolute"></div>

	<div class="relative z-10 mx-auto max-w-7xl px-6">
		<div class="max-w-3xl">
			<div class="fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm border border-white/10" use:animateOnScroll>
				Our Mission
			</div>
			<h1 class="fade-up text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl" use:animateOnScroll>
				Reimagining How
				<span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Cities Think</span>
			</h1>
			<p class="fade-up mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed" use:animateOnScroll>
				UrbanPulse was founded on a simple belief: cities should work for their people, not the other way around. We combine artificial intelligence, IoT sensor networks, and urban science to create infrastructure that anticipates needs, prevents problems, and continuously improves.
			</p>
		</div>
	</div>
</section>

<!-- MISSION & VISION -->
<section class="py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="fade-left" use:animateOnScroll>
				<img
					src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop"
					alt="Team of engineers collaborating on smart city technology in a modern workspace"
					class="rounded-2xl shadow-elevated"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
			<div class="fade-right" use:animateOnScroll>
				<h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
					Where Urban Science Meets
					<span class="text-primary-600">Artificial Intelligence</span>
				</h2>
				<p class="mt-4 text-lg leading-relaxed text-neutral-600">
					By 2050, 68% of the world's population will live in urban areas. This unprecedented migration demands infrastructure that can adapt, learn, and scale. Traditional approaches — reactive maintenance, manual monitoring, siloed systems — simply cannot keep pace.
				</p>
				<p class="mt-4 text-lg leading-relaxed text-neutral-600">
					UrbanPulse bridges this gap with an end-to-end platform that turns raw urban data into actionable intelligence. From traffic optimization to structural health monitoring, our AI models process millions of signals to keep cities running efficiently, safely, and sustainably.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- VALUES -->
<Section title="Our Core Values" subtitle="These principles guide every algorithm we train, every sensor we deploy, and every partnership we build." dark>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each [
			{ icon: '🌍', title: 'Sustainability First', desc: 'Every solution is designed to reduce environmental impact. We measure success not just in efficiency gains, but in carbon reduced, energy saved, and ecosystems preserved.' },
			{ icon: '🔒', title: 'Privacy by Design', desc: 'We use edge computing and differential privacy to process urban data without compromising individual privacy. No personal data ever leaves the local processing node.' },
			{ icon: '🤝', title: 'Open Standards', desc: 'Our platform is built on open APIs and interoperable protocols. Cities should never be locked into a single vendor — we believe in ecosystems, not silos.' },
			{ icon: '🧪', title: 'Evidence-Based', desc: 'Every recommendation is backed by data. Our models are rigorously validated against real-world outcomes, and we publish our methodologies for peer review.' },
			{ icon: '♿', title: 'Inclusive Design', desc: 'Smart city technology must serve all residents. We design for accessibility, equity, and the diverse needs of urban populations from day one.' },
			{ icon: '🔄', title: 'Continuous Improvement', desc: 'Our AI models never stop learning. As cities evolve, our systems adapt — processing new patterns, incorporating feedback, and optimizing in perpetuity.' }
		] as value, i}
			<div class="fade-up rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20" style="transition-delay: {i * 100}ms" use:animateOnScroll>
				<div class="mb-3 text-3xl">{value.icon}</div>
				<h3 class="mb-2 text-lg font-bold text-white">{value.title}</h3>
				<p class="text-sm leading-relaxed text-neutral-400">{value.desc}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- IMPACT NUMBERS -->
<section class="py-20 lg:py-28 bg-section-gradient" aria-label="Our impact">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center mb-14">
			<h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">Our Impact in Numbers</h2>
			<p class="mt-4 text-lg text-neutral-600">Measurable results across every city we serve</p>
		</div>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each [
				{ value: 150, suffix: '+', label: 'Cities worldwide' },
				{ value: 2, suffix: 'M+', label: 'IoT sensors deployed' },
				{ value: 47, suffix: '%', label: 'Average energy savings' },
				{ value: 12, suffix: 'M', label: 'Citizens impacted daily' }
			] as stat, i}
				<div class="fade-up text-center" style="transition-delay: {i * 100}ms" use:animateOnScroll>
					<div class="text-4xl font-extrabold text-primary-600 md:text-5xl" use:animateCounter={{ target: stat.value, suffix: stat.suffix }}>0</div>
					<p class="mt-2 text-sm text-neutral-500">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- AI WORKFLOW -->
<section class="py-20 lg:py-28" aria-label="AI-powered workflow">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="fade-up" use:animateOnScroll>
				<h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
					AI at the Core of
					<span class="text-primary-600">Every Decision</span>
				</h2>
				<p class="mt-4 text-lg leading-relaxed text-neutral-600">
					Our proprietary AI engine, CityMind, processes over 50 terabytes of urban data daily. It doesn't just analyze — it predicts, recommends, and in many cases, acts autonomously to optimize city operations.
				</p>
				<div class="mt-8 space-y-4">
					{#each [
						{ title: 'Predictive Analytics', desc: 'Forecast infrastructure failures 3 years in advance with 94% accuracy' },
						{ title: 'Natural Language Reports', desc: 'AI-generated briefings for city officials in plain, actionable language' },
						{ title: 'Adaptive Learning', desc: 'Models retrain weekly on new data, continuously improving accuracy' },
						{ title: 'Multi-modal Fusion', desc: 'Combines satellite imagery, sensor data, social signals, and weather patterns' }
					] as item, i}
						<div class="flex items-start gap-4">
							<div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-600">
								{i + 1}
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900">{item.title}</h3>
								<p class="text-sm text-neutral-600">{item.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="fade-right" use:animateOnScroll>
				<img
					src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop"
					alt="Data visualization dashboard showing real-time urban analytics and AI insights"
					class="rounded-2xl shadow-elevated"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-hero-gradient relative overflow-hidden py-20" aria-label="Call to action">
	<div class="hero-grid absolute inset-0"></div>
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h2 class="fade-up text-3xl font-bold text-white sm:text-4xl" use:animateOnScroll>
			Join the Smart City Movement
		</h2>
		<p class="fade-up mt-4 text-lg text-neutral-300" use:animateOnScroll>
			Whether you're a city planner, infrastructure director, or technology innovator — we'd love to collaborate.
		</p>
		<div class="fade-up mt-8" use:animateOnScroll>
			<a href="/contact" class="btn btn-primary text-base px-8 py-4">
				Partner With Us
			</a>
		</div>
	</div>
</section>
