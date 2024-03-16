import gulp from 'gulp'
import minify from 'gulp-htmlmin'
import pug2html from 'gulp-pug'
import plumber from 'gulp-plumber'
import browser from 'browser-sync'
import optimImg from 'sharp'

const { src, dest, watch, series, parallel } = gulp

export const config = {

  paths: {
    source: 'source/',
    build: 'build/',
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
    minifyHTML: minify,
    pug2HTML: pug2html,
    plumberWatch: plumber,
    browserServer: browser,
    optimImg: optimImg
  }
}
