var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer');



gulp.task('doesWork', function () {
    gulp.src('./src/scss/**.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/scss'))
});

gulp.task('default', ['doesWork']);