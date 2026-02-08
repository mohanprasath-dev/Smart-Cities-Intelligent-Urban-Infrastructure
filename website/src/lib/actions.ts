// Intersection Observer animation action
export function animateOnScroll(node: HTMLElement, options?: { threshold?: number; rootMargin?: string }) {
	const threshold = options?.threshold ?? 0.15;
	const rootMargin = options?.rootMargin ?? '0px 0px -50px 0px';

	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		node.classList.add('visible');
		return { destroy() {} };
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}

// Animated counter action
export function animateCounter(
	node: HTMLElement,
	options: { target: number; duration?: number; suffix?: string; prefix?: string }
) {
	const { target, duration = 2000, suffix = '', prefix = '' } = options;
	let hasAnimated = false;

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					hasAnimated = true;
					const startTime = performance.now();

					function update(currentTime: number) {
						const elapsed = currentTime - startTime;
						const progress = Math.min(elapsed / duration, 1);
						// Ease out cubic
						const eased = 1 - Math.pow(1 - progress, 3);
						const current = Math.round(eased * target);
						node.textContent = `${prefix}${current.toLocaleString()}${suffix}`;

						if (progress < 1) {
							requestAnimationFrame(update);
						}
					}

					if (prefersReducedMotion) {
						node.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
					} else {
						requestAnimationFrame(update);
					}
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
