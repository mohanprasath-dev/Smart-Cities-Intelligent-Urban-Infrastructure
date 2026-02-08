<script lang="ts">
	let toastVisible = $state(false);
	let toastMessage = $state('');
	let toastType = $state<'success' | 'error'>('success');
	let timeoutId: ReturnType<typeof setTimeout>;

	// Form state
	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let errors = $state<Record<string, string>>({});
	let submitting = $state(false);

	function validate(): boolean {
		const e: Record<string, string> = {};

		if (!formData.name.trim()) e.name = 'Name is required';
		else if (formData.name.trim().length < 2) e.name = 'Name must be at least 2 characters';

		if (!formData.email.trim()) e.email = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email';

		if (!formData.subject.trim()) e.subject = 'Subject is required';

		if (!formData.message.trim()) e.message = 'Message is required';
		else if (formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters';

		errors = e;
		return Object.keys(e).length === 0;
	}

	function showToast(message: string, type: 'success' | 'error') {
		clearTimeout(timeoutId);
		toastMessage = message;
		toastType = type;
		toastVisible = true;
		timeoutId = setTimeout(() => {
			toastVisible = false;
		}, 4000);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!validate()) {
			showToast('Please fix the errors in the form.', 'error');
			return;
		}

		submitting = true;

		// Simulate API call
		await new Promise((r) => setTimeout(r, 1500));

		showToast('Thank you! Your message has been sent successfully.', 'success');
		formData = { name: '', email: '', subject: '', message: '' };
		errors = {};
		submitting = false;
	}
</script>

<form onsubmit={handleSubmit} class="space-y-6" novalidate aria-label="Contact form">
	<!-- Name -->
	<div>
		<label for="name" class="mb-1.5 block text-sm font-medium text-neutral-700">Full Name *</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			class="w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none
				{errors.name ? 'border-error bg-red-50' : 'border-neutral-200 bg-white hover:border-neutral-300'}"
			placeholder="Your full name"
			autocomplete="name"
			aria-invalid={errors.name ? 'true' : undefined}
			aria-describedby={errors.name ? 'name-error' : undefined}
		/>
		{#if errors.name}
			<p id="name-error" class="mt-1 text-xs text-error" role="alert">{errors.name}</p>
		{/if}
	</div>

	<!-- Email -->
	<div>
		<label for="email" class="mb-1.5 block text-sm font-medium text-neutral-700">Email Address *</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			class="w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none
				{errors.email ? 'border-error bg-red-50' : 'border-neutral-200 bg-white hover:border-neutral-300'}"
			placeholder="you@example.com"
			autocomplete="email"
			aria-invalid={errors.email ? 'true' : undefined}
			aria-describedby={errors.email ? 'email-error' : undefined}
		/>
		{#if errors.email}
			<p id="email-error" class="mt-1 text-xs text-error" role="alert">{errors.email}</p>
		{/if}
	</div>

	<!-- Subject -->
	<div>
		<label for="subject" class="mb-1.5 block text-sm font-medium text-neutral-700">Subject *</label>
		<select
			id="subject"
			bind:value={formData.subject}
			class="w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none
				{errors.subject ? 'border-error bg-red-50' : 'border-neutral-200 bg-white hover:border-neutral-300'}"
			aria-invalid={errors.subject ? 'true' : undefined}
			aria-describedby={errors.subject ? 'subject-error' : undefined}
		>
			<option value="">Select a topic...</option>
			<option value="Smart Infrastructure">Smart Infrastructure Solutions</option>
			<option value="Urban Analytics">Urban Analytics Platform</option>
			<option value="Partnership">Partnership Inquiry</option>
			<option value="General">General Question</option>
		</select>
		{#if errors.subject}
			<p id="subject-error" class="mt-1 text-xs text-error" role="alert">{errors.subject}</p>
		{/if}
	</div>

	<!-- Message -->
	<div>
		<label for="message" class="mb-1.5 block text-sm font-medium text-neutral-700">Message *</label>
		<textarea
			id="message"
			rows="5"
			bind:value={formData.message}
			class="w-full resize-y rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none
				{errors.message ? 'border-error bg-red-50' : 'border-neutral-200 bg-white hover:border-neutral-300'}"
			placeholder="Tell us about your smart city project or inquiry..."
			aria-invalid={errors.message ? 'true' : undefined}
			aria-describedby={errors.message ? 'message-error' : undefined}
		></textarea>
		{#if errors.message}
			<p id="message-error" class="mt-1 text-xs text-error" role="alert">{errors.message}</p>
		{/if}
	</div>

	<!-- Submit -->
	<button
		type="submit"
		class="btn btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
		disabled={submitting}
	>
		{#if submitting}
			<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
			</svg>
			Sending...
		{:else}
			Send Message
			<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		{/if}
	</button>
</form>

<!-- Toast Notification -->
{#if toastVisible}
	<div
		class="toast {toastType === 'success' ? 'toast-success' : 'toast-error'}"
		role="status"
		aria-live="polite"
	>
		<div class="flex items-center gap-2">
			{#if toastType === 'success'}
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
				</svg>
			{:else}
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
				</svg>
			{/if}
			{toastMessage}
		</div>
	</div>
{/if}
