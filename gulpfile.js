const gulp = require('gulp');
const apidoc = require('gulp-apidoc');

gulp.task('apidoc', (done) => {
  apidoc({
    src: 'routes/',
    dest: 'docs/',
    debug: true,
    includeFilters: ['.*\\.js$'],
  }, done);
});

gulp.task('default', ['apidoc']);

gulp.task('watch', () => {
  gulp.watch('routes/*.js', ['apidoc']);
});
