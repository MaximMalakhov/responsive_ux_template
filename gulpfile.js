/*для минификации css*/

var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('minify-css', function() {
	return gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

/*автопрефиксер css*/

gulp.task('autoprefix', function() {
	gulp.src('dev/css/style.css')
		.pipe(autoprefixer({
			browsers: ['IE 11','last 2 iOS versions','last 1 Chrome versions',
			'last 1 Firefox versions','last 1 Safari versions',
			'last 1 Opera versions','last 1 Edge versions','Android >= 4.4'],
			cascade: false
		}))
	.pipe(gulp.dest('dev/css/'))
});