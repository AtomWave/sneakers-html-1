import gulp from 'gulp'
import minifyHtml from 'gulp-htmlmin'
import minifyCSS from 'gulp-clean-css'
import pug2html from 'gulp-pug'
import plumber from 'gulp-plumber'
import browser from 'browser-sync'
import sharp from 'gulp-sharp-responsive'
import { stacksvg } from 'gulp-stacksvg'
import svgo from 'gulp-svgo'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import browserify from 'browserify'
import vinylsource from 'vinyl-source-stream'
import notify from 'gulp-notify'
import buffer from 'vinyl-buffer'
import { rmSync } from 'node:fs'

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import clean_css from 'gulp-clean-css';

const scssCSS = gulpSass(dartSass);

const { src, dest, watch, series, parallel } = gulp

export const config = {

  paths: {
    source: './source/',
    build: './build/',
    images: './source/images/',
    raws: './raws/',
    pug: {
      all: './source/pug/',
      pages: './source/pug/pages/**/*.pug',
      main: './source/pug/index.pug'
    },
    js: {
      all: './source/js/'
    },
    scss: {
      all: './source/sass/'
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
    scssCSS: scssCSS,
    plumber_watch: plumber,
    browser_2_server: browser,
    sharp: sharp,
    svgo: svgo,
    stack: stacksvg,
    uglify: uglify,
    rename: rename,
    browserify: browserify,
    vinylsource: vinylsource,
    notify: notify,
    buffer: buffer,
    del: rmSync,
    minifyCSS: minifyCSS,
    postcss: postcss,
    autoprefixer: autoprefixer,
    concat: concat,
    clean_css: clean_css
  }
}
