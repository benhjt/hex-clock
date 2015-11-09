// include gulp
var gulp = require('gulp');

// include plugins
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var htmlminify = require('gulp-minify-html');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('clean', function () {
	gulp.src('dist', {
			read: false
		})
		.pipe(clean());
});

// JSHint task
gulp.task('jshint', ['clean'], function () {
	gulp.src(['gulpfile.js', './app/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

// minifies, obfuscates and concatenates our JS files
gulp.task('scripts', ['clean'], function () {
	gulp.src(['./app/**/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// minifies styles
gulp.task('styles', ['clean'], function () {
	gulp.src('./app/styles/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist/styles'));
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
gulp.task('default', ['clean', 'jshint', 'scripts', 'styles', 'images', 'html']);
