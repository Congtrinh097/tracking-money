let gulp = require('gulp');
let ts = require('gulp-typescript');

let tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
  console.log(' ----------- build scripts -----------')
  let tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('built'));
});

// Build
gulp.task('build', ['scripts']);


gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.ts', ['build']);
  gulp.watch('src/**/*.tsx', ['build']);
});

gulp.task('default', ['build']);