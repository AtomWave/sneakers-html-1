// import { config } from "./../gulp-config.js";

// const { pug2html } = config.tasks;
// const { src, dest } = config.gulp;
// const { source, build } = config.paths;

// async function pugTask() {
// 	(function () {
// 		return (
// 			src(`${source}/pug/pages/**/*.pug`)
// 			.pipe(pug2html({ pretty: true }))
// 			.pipe(dest(`${build}pages`))
//       )
// 	})
//   ();

// 	return (
// 		src(`${source}pug/index.pug`)
// 		.pipe(pug2html({ pretty: true }))
// 		.pipe(dest(`${build}`))
// 		.pipe(src(`${source}pug/pages/**/*.pug`))
// 		.pipe(pug({ pretty: true }))
// 		.pipe(dest(`${build}pages`))
//   );
// }

// export default pugTask;

import gulp from "gulp";
import pug from "gulp-pug";

async function pug2html() {
	(function () {
		return gulp
			.src("source/pug/pages/**/*.pug")
			.pipe(pug({ pretty: true }))
			.pipe(gulp.dest("build/pages"));
	})();

	return gulp
		.src("source/pug/index.pug")
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("build"))
		.pipe(gulp.src("source/pug/pages/**/*.pug"))
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("build/pages"));
}

export default pug2html;
