"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include")
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin =require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run =require("run-sequence");
var del = require("del");
var rollup = require('gulp-better-rollup');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
  return gulp.src('js/main.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({}, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('build/js'));
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function () {
  return gulp.src("img/{icon-*,logo-*}.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("img/"))
});

gulp.task("html", function () {
  return gulp.src("*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
  .pipe(gulp.dest("img"));
});

gulp.task("serve", ['build'], function() {
  server.init({
    server: "build/"
  });
  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("**/*.html", ["html"]);
  gulp.watch("js/**/*.js", ["scripts"]);
});

gulp.task("copy", ["scripts"], function () {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/jquery/**"
  ], {
    base: "."
  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
})

gulp.task("build", function (done) {
  run(
      "clean",
      "sprite",
      "copy",
      "style",
      "html",
      done
  );
});
