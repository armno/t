var gulp = require('gulp');

// run `cordova prepare` command
gulp.task('prepare', function() {
	console.log('preparing files');
});

gulp.task('default', function() {
	// run cordova prepare when start gulp
	gulp.run('prepare');
	gulp.watch('www/**/*', function() {
		gulp.run('prepare');
	});
});
