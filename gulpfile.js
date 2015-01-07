var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify().
        transform(reactify).
        add('./js/App.js').
        bundle().
        pipe(source('bundle.js')).
        pipe(gulp.dest('./dist'));
})