/*для минификации css*/

var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
	return gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});