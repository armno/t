var gulp = require('gulp');
var exec = require('gulp-exec');

gulp.task('prepare', function() {
	gulp.src('.')
		.pipe(exec('cordova prepare ios', { silent: true }));
});
gulp.task('watch', function() {
	gulp.watch('www/**/*', ['prepare']);
});
