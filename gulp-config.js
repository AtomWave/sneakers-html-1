import gulp from 'gulp';
import minify_html from 'gulp-htmlmin';
import pug2html from 'gulp-pug';

const { src, dest, watch, series, parallel } = gulp;

export const config = {
	paths: {
		source: 'source/',
		build: 'build/'
	},
	gulp: {
		src: src,
		dest: dest,
		watch: watch,
		series: series,
		parallel: parallel
	},
	tasks: {
		minify_html: minify_html,
		pug2html: pug2html
	}
}