// Get those sweet gulp libraries in here
var gulp   = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function() {
  console.log('test');
});
