<script>
	import { browser } from '$app/environment';
	import posthog from 'posthog-js';

	if (browser) {
		posthog.init('phc_QjBHlSHQPP3PQAqq5Mb0VvvEp8qpR3ujkS2gUUla1TB', {
			api_host: 'https://us.posthog.com'
		});
	}
</script>

<slot />
