<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subtitle?: string;
		dark?: boolean;
		narrow?: boolean;
		id?: string;
		children: Snippet;
	}

	let { title, subtitle, dark = false, narrow = false, id, children }: Props = $props();
</script>

<section
	{id}
	class="py-20 lg:py-28 {dark ? 'bg-dark-gradient text-white' : 'bg-section-gradient'}"
>
	<div class="mx-auto max-w-7xl px-6 {narrow ? 'max-w-4xl' : ''}">
		<div class="mb-14 text-center">
			<h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl {dark ? 'text-white' : 'text-neutral-900'}">
				{title}
			</h2>
			{#if subtitle}
				<p class="mx-auto mt-4 max-w-2xl text-lg {dark ? 'text-neutral-300' : 'text-neutral-600'}">
					{subtitle}
				</p>
			{/if}
		</div>
		{@render children()}
	</div>
</section>
