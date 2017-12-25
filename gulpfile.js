const gulp = require('gulp');
const apidoc = require('gulp-apidoc');

gulp.task('apidoc', (done) => {
  apidoc({
    src: './routes/docs/',
    dest: './docs/',
    debug: true,
  }, done);
});

gulp.task('default', ['apidoc']);

gulp.task('watch', () => {
  gulp.watch('routes/docs/*.docs.js', ['apidoc']);
});
