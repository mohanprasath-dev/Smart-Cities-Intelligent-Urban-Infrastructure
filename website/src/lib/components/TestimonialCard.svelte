<script lang="ts">
	import { animateOnScroll } from '$lib/actions';

	interface Props {
		quote: string;
		name: string;
		role: string;
		avatar: string;
		delay?: number;
	}

	let { quote, name, role, avatar, delay = 0 }: Props = $props();
</script>

<div
	class="card fade-up relative"
	style="transition-delay: {delay}ms"
	use:animateOnScroll
>
	<!-- Quote mark -->
	<svg class="absolute top-4 right-6 h-10 w-10 text-primary-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
		<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
	</svg>

	<blockquote class="relative z-10">
		<p class="text-neutral-700 leading-relaxed italic">"{quote}"</p>
		<footer class="mt-6 flex items-center gap-3">
			<img
				src={avatar}
				alt="Photo of {name}"
				class="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
				loading="lazy"
				width="48"
				height="48"
			/>
			<div>
				<cite class="block text-sm font-semibold not-italic text-neutral-900">{name}</cite>
				<span class="text-xs text-neutral-500">{role}</span>
			</div>
		</footer>
	</blockquote>
</div>
