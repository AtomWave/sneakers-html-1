import { config } from "./../gulp-config.js";

// sharp 

const {optimImg} = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths; 

export const optimizeImages = () => {
	return src(`${source}images/**/*.{jpg,png}`) //берем изображения-исходники
		.pipe(optimImg({
			quality: 70,
			toFormat: 'webp',
			resize: [ "1x", "2x", "1.5x" ],
			progressive: true
		}))
		.pipe(dest(`${build}images/optimize-img`)) //собираем сжатые изображения
}