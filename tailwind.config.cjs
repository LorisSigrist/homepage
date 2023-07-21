import Typography from '@tailwindcss/typography';
import Forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			colors: {
				gray: colors.stone
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
								content: 'none'
							},
							'& p::after': {
								content: 'none'
							}
						},
						'code::before': {
							content: 'none'
						},
						'code::after': {
							content: 'none'
						},
						code: {
							color: "inherit",
							backgroundColor: "transparent",
							borderRadius: theme('borderRadius.DEFAULT'),
							paddingLeft: theme('spacing[1.5]'),
							paddingRight: theme('spacing[1.5]'),
							paddingTop: theme('spacing.1'),
							paddingBottom: theme('spacing.1'),
							fontSize: '0.875rem',
						}
					}
				}
			})
		}
	},
	plugins: [Typography, Forms],
	darkMode: 'class'
};
