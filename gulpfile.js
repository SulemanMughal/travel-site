var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');

gulp.task('default', async function () {
    console.log('Hurray!');
});

gulp.task('html', async function () {
    console.log('HTML has been changes....');
});

gulp.task('styles', async function () {
    // console.log('Style has been changes....');
    return gulp.src('../app/assets/styles/style.css')
        .pipe(postcss([cssvars, autoprefixer]))
        .pipe(gulp.dest('../app/temp/styles'));
});

gulp.task('watch', function () {
    watch('../app/index.html', gulp.series('html'));
    watch('../app/assets/styles/**/*.css', gulp.series('styles'));
});

// exports.build = gulp.series(html, watch);