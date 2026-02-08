<script lang="ts">
	import { siteConfig, navLinks } from '$lib/data';
</script>

<footer class="bg-dark-gradient text-white">
	<!-- Main Footer -->
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href="/" class="mb-4 flex items-center gap-2.5 text-xl font-bold" aria-label="{siteConfig.name} home">
					<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 text-white text-sm shadow-md">
						UP
					</span>
					<span class="font-heading">{siteConfig.name}</span>
				</a>
				<p class="mt-3 text-sm leading-relaxed text-neutral-400">
					{siteConfig.description}
				</p>
				<!-- Social Links -->
				<div class="mt-6 flex gap-3">
					<a
						href={siteConfig.github}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white"
						aria-label="GitHub profile"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					<a
						href={siteConfig.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white"
						aria-label="LinkedIn profile"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Navigation</h3>
				<ul class="space-y-3">
					{#each navLinks as link}
						<li>
							<a href={link.href} class="text-sm text-neutral-400 transition-colors hover:text-primary-400">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Solutions -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Solutions</h3>
				<ul class="space-y-3">
					<li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Intelligent Transportation</a></li>
					<li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Smart Energy Grids</a></li>
					<li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Water Management</a></li>
					<li><a href="/analytics" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Urban Analytics</a></li>
					<li><a href="/analytics" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Predictive Maintenance</a></li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Get in Touch</h3>
				<ul class="space-y-3">
					<li class="text-sm text-neutral-400">
						<a href="/contact" class="transition-colors hover:text-primary-400">Contact Form →</a>
					</li>
					<li class="text-sm text-neutral-400">
						<a href={siteConfig.github} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-primary-400">
							GitHub →
						</a>
					</li>
					<li class="text-sm text-neutral-400">
						<a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-primary-400">
							LinkedIn →
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-white/10">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
			<p class="text-sm text-neutral-400">
				© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
			</p>
			<p class="text-sm text-neutral-500">
				{siteConfig.credit}
			</p>
		</div>
	</div>
</footer>
