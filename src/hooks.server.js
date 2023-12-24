import { minify } from 'html-minifier';
import { building } from '$app/environment';

/** @type {import("html-minifier").Options} */
const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: false, // some hydration code needs comments, so leave them in
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

export async function handle({ event, resolve }) {
	let page = '';

	return resolve(event, {
		transformPageChunk: ({ html, done }) => {
			page += html;
			if (done && building) {
				page = minify(page, minification_options);
			}

			page +=
`<!--
			                                                   ,,                  
'7MMF'                         db               .M"""bgd  db                      db            mm    
  MM                                           ,MI    "Y                                        MM    
  MM         ,pW"Wq.'7Mb,od8 '7MM  ,pP"Ybd     'MMb.    '7MM  .P"Ybmmm '7Mb,od8 '7MM  ,pP"Ybd mmMMmm  
  MM        6W'   'Wb MM' "'   MM  8I   '"       'YMMNq.  MM :MI  I8     MM' "'   MM  8I   '"   MM    
  MM      , 8M     M8 MM       MM  'YMMMa.     .     'MM  MM  WmmmP"     MM       MM  'YMMMa.   MM    
  MM     ,M YA.   ,A9 MM       MM  L.   I8     Mb     dM  MM 8M          MM       MM  L.   I8   MM    
.JMMmmmmMMM  'Ybmd9'.JMML.   .JMML.M9mmmP'     P"Ybmmd" .JMML.YMMMMMb  .JMML.   .JMML.M9mmmP'   'Mbmo 
															 6'     dP                                
															 ^bmmmd'                                  
-->`

			return page;
		}
	});
}
