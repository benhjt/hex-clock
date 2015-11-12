// include gulp
var gulp = require('gulp');

// include plugins
var del = require('del');
var htmlminify = require('gulp-minify-html');

gulp.task('clean', function () {
	del(['./dist']);
});

// copies images to dist
gulp.task('images', ['clean'], function () {
	gulp.src('.app/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

// minifies our HTML and replaces our script includes to use the minified file
gulp.task('html', ['clean'], function () {
	gulp.src('./app/index.html')
		.pipe(htmlminify())
		.pipe(gulp.dest('dist'));
});

// default task that runs al of the above
gulp.task('default', ['clean', 'images', 'html']);
