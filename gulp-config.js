import gulp from 'gulp';
import minify_html from 'gulp-htmlmin';
import pug2html from 'gulp-pug';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import browser from 'browser-sync';

const { src, dest, watch, series, parallel } = gulp;

export const config = {
  paths: {
    source: 'source/',
    build: 'build/',
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
    newer_2_build: newer,
    browser_2_server: browser
  }
}
