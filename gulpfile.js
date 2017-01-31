var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
    //babel-preset-es2015


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


// gulp.task('clean', function (cb) {
//     del([
//         'dist'
//     ], cb);
// });

gulp.task('build-css', function () {
    return gulp.src('./public/app/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/dist'));
});


gulp.task('build-js', function() {
   return gulp.src(['./public/app/app.js', './public/app/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('build', [ 'build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./public/index.html','./public/app/**/*.js', './public/app/**/*.*css'], ['build']);
});
