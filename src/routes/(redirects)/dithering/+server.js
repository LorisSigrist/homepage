import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function GET() {
	redirect(301, 'https://dithering.sigrist.dev');
}
