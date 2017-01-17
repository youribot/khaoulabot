const gulp = require('gulp');
var gulpCopy = require('gulp-copy');

// Copying semantic-ui to src.
var sourceFiles = [ 'semantic/dist/**/*' ];
var destination = 'src/renderer/styles/';
gulp.task('copy-assets', function() {
  return gulp
    .src(sourceFiles)
    .pipe(gulp.dest(destination))
});

// Default Task
gulp.task('default', ['copy-assets']);
