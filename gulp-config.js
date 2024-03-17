<<<<<<< HEAD
import gulp from 'gulp'
import minify from 'gulp-htmlmin'
import pug2html from 'gulp-pug'
import plumber from 'gulp-plumber'
import browser from 'browser-sync'
import optimImg from 'sharp'
=======
import gulp from 'gulp';
import minify_html from 'gulp-htmlmin';
import pug2html from 'gulp-pug';
import plumber from 'gulp-plumber';
import browser from 'browser-sync';
import sharp from 'sharp';
>>>>>>> ac48b5afac0f029b6f8a39d67d422d839e793e0d

const { src, dest, watch, series, parallel } = gulp

export const config = {

  paths: {
    source: 'source/',
    build: 'build/',
    images: 'source/images/',
    raws: 'raws/', //Путь к каталогу с необработанными изображениями
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
<<<<<<< HEAD
    minifyHTML: minify,
    pug2HTML: pug2html,
    plumberWatch: plumber,
    browserServer: browser,
    optimImg: optimImg
=======
    minify_html: minify_html,
    pug_2_html: pug2html,
    plumber_watch: plumber,
    browser_2_server: browser,
    sharp: sharp
>>>>>>> ac48b5afac0f029b6f8a39d67d422d839e793e0d
  }
}
