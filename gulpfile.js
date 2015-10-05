// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
//require('require-dir')('build/tasks');

var gulp = require('gulp');
require("es6-shim");
var sass = require('gulp-ruby-sass');

gulp.task('build-css', function () {
    return sass("test/**/*.scss")
        .on('error', sass.logError)
        .pipe(gulp.dest('report'));
});
