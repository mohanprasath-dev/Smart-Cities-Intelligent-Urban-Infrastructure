<script lang="ts">
	import { animateOnScroll } from '$lib/actions';

	interface Props {
		icon?: string;
		title: string;
		description: string;
		link?: string;
		delay?: number;
	}

	let { icon, title, description, link, delay = 0 }: Props = $props();
</script>

<div
	class="card group fade-up"
	style="transition-delay: {delay}ms"
	use:animateOnScroll
>
	{#if icon}
		<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-100">
			{icon}
		</div>
	{/if}
	<h3 class="mb-2 text-xl font-bold text-neutral-900">{title}</h3>
	<p class="text-neutral-600 leading-relaxed">{description}</p>
	{#if link}
		<a
			href={link}
			class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
			aria-label="Learn more about {title}"
		>
			Learn more
			<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	{/if}
</div>
