import Typography from '@tailwindcss/typography';
import Forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						fontFamily: 'Baskerville, serif',
						fontSize: '1.25rem',
						lineHeight: '1.75rem',
						color: theme('colors.gray.950 dark:gray.50'),

						blockquote: {
							fontStyle: 'normal',
							'& p::before': {
								content: 'none',
							},
							'& p::after': {
								content: 'none',
							}
						},
					},
				}
			})
		},
	},
	plugins: [Typography, Forms],
	darkMode: 'class'
};
