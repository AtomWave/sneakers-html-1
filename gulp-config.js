import gulp from 'gulp';
import minify_html from 'gulp-htmlmin';
import pug2html from 'gulp-pug';
import plumber from 'gulp-plumber';
import browser from 'browser-sync';
import sharp from 'sharp';

const { src, dest, watch, series, parallel } = gulp;

export const config = {

  paths: {
    source: 'source/',
    build: 'build/',
    images: 'source/images',
    raws: 'source/raws', //Путь к каталогу с необработанными изображениями
    pug: {
      all: `source/pug/`,
      pages: `source/pug/pages/**/*.pug`,
      main: `source/pug/index.pug`
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
    minify_html: minify_html,
    pug_2_html: pug2html,
    plumber_watch: plumber,
    browser_2_server: browser,
    sharp: sharp
  }
}
