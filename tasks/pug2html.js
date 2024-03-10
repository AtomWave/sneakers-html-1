import { config } from "./../gulp-config.js";

const { pug2html } = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths;

export const pug_2_html = () => {
	return src(`${source}pug/**/*.pug`).pipe(pug2html({
		pretty: true,
	})).pipe(dest(`${build}`))
}