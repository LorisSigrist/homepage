import posthog from "posthog-js";

posthog.init('phc_QjBHlSHQPP3PQAqq5Mb0VvvEp8qpR3ujkS2gUUla1TB', {
    api_host: 'https://us.posthog.com'
});

export const handleError = ({ error, event }) => {
    posthog.capture('client error', { error, event });
}