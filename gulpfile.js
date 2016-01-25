var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer');



gulp.task('css-builder', function () {
    gulp.src('./src/scss/**.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/css'))
});

gulp.task('default', ['css-builder']);