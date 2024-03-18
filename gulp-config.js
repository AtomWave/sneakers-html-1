import gulp from 'gulp'
import minifyHtml from 'gulp-htmlmin'
import pug2html from 'gulp-pug'
import plumber from 'gulp-plumber'
import browser from 'browser-sync'
import sharp from 'sharp'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scss2CSS = gulpSass(dartSass);

const { src, dest, watch, series, parallel } = gulp

export const config = {

  paths: {
    source: 'source/',
    build: 'build/',
    images: 'source/images/',
    raws: 'raws/', // Путь к каталогу с необработанными изображениями
    pug: {
      all: 'source/pug/',
      pages: 'source/pug/pages/**/*.pug',
      main: 'source/pug/index.pug'
    }
  },
  gulp: {
    src: src,
    dest: dest,
    watch: watch,
    series: series,
    parallel: parallel
  },
  tasks: {
    minify_html: minifyHtml,
    pug_2_html: pug2html,
    scss2CSS: scss2CSS,
    plumber_watch: plumber,
    browser_2_server: browser,
    sharp: sharp
  }
}
