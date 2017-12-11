'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpImport = require('gulp-html-import'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    uglyfly = require('gulp-uglyfly'),
    notify = require('gulp-notify'),
    browserSync = require("browser-sync");

const autoprefixer = require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin');

var config = {
    server: {
      baseDir: "./public"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    files: 'public/**/*.*',
    logPrefix: "Frontend_Devil"
};

var paths = {
  public: {
    html: 'public/',
    js: 'public/js/',
    css: 'public/css/',
    img: 'public/img/',
    fonts: 'public/fonts/'
  }, 

  src: { 
    html: 'src/*.html', 
    templates: 'src/templates/',
    js: 'src/js/*.js',
    sass: 'src/sass/*.scss',
    img: 'src/img/**/*.*', 
    fonts: 'src/fonts/**/*.*'
  },

  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    sass: 'src/sass/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  }
};

/* work with HTML */
gulp.task('html', function () {
  gulp.src(paths.src.html)
    .pipe(gulpImport(paths.src.templates))
    .pipe(gulp.dest(paths.public.html))
    .pipe(browserSync.reload({stream:true}))
    //.pipe(notify('Done! HTML build.'));
});
/* end work with HTML */

/* work with Sass */
gulp.task('sass', function () {	
  return gulp.src(paths.src.sass)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })) 
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.reload({stream:true}))
    //.pipe(notify('Done! Sass compiled!'));
});
/* end work with Sass */

/* work with JS */
gulp.task('js', function() {									
  return gulp.src(paths.src.js)					     					
    .pipe(uglyfly())								           
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.public.js))
    .pipe(browserSync.reload({stream:true}));
    //.pipe(notify('Done! JS build!'));
});
/* end with JS */

/* work with IMG */
gulp.task('img', () =>
  gulp.src(paths.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.public.img))	
    .pipe(browserSync.reload({stream:true}))
);
/* end work with IMG */

/* work with FONTS */
gulp.task('fonts', function() {
  gulp.src(paths.src.fonts)
  .pipe(gulp.dest(paths.public.fonts))
  .pipe(browserSync.reload({stream:true}))
});
/* end work with FONTS */


/* browser-sync */
gulp.task('webserver', function () {
    browserSync(config);
});
/* end browser-sync */

/* task for build proect */
gulp.task('build', [
    'html',
    'sass',
    'js',
    'img',
    'fonts'
]);
/* end task for build */

/* watcher */
gulp.task('watcher',function(){
  gulp.watch(paths.watch.html, ['html']);
  gulp.watch(paths.watch.sass, ['sass']);
  gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.watch.img, ['img']);
  gulp.watch(paths.watch.fonts, ['fonts']);
});
/* end watcher */

/* default */
gulp.task('default', ['build', 'webserver', 'watcher']);
/* end default */