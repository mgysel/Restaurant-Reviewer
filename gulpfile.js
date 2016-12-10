'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var mergeStream = require('merge-stream');

gulp.task('default', ['copy', 'sass', 'css', 'lint', 'scripts'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/css/**/*.css', ['css']);
	gulp.watch('src/js/**/*.js', ['scripts','lint']);
	gulp.watch('src/*.html', ['copy']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);

	browserSync.init({
		server: 'dist'
	});
});

gulp.task('dist', [
	'copy',
	'sass',
	'css',
	'lint',
	'scripts'
]);

gulp.task('scripts', function() {
	gulp.src(['src/js/jquery.js', 'src/js/add-review.js'])
		.pipe(concat('add-review.js'))
		.pipe(uglify('add-review.js'))
		.pipe(gulp.dest('dist/js'));
	gulp.src(['src/js/jquery.js', 'src/js/rests.js'])
		.pipe(concat('rests.js'))
		.pipe(uglify('rests.js'))
		.pipe(gulp.dest('dist/js'));
});

// copy over html files, images.
gulp.task('copy', function() {
	return mergeStream(
    	gulp.src('src/*.html').pipe(gulp.dest('dist')),
    	gulp.src('src/img/*').pipe(gulp.dest('dist/img'))
  	);
});

gulp.task('sass', function() {
	gulp.src('src/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

// Concat and minify css
gulp.task('css', function () {
	gulp.src(['src/css/bootstrap.css', 'src/css/index-style.css', 'src/css/index-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('index.css'))
		.pipe(gulp.dest('dist/css'));
	gulp.src(['src/css/bootstrap.css', 'src/css/kedai-makan-style.css', 'src/css/kedai-makan-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('kedai-makan.css'))
		.pipe(gulp.dest('dist/css'));
	gulp.src(['src/css/bootstrap.css', 'src/css/search-results-style.css', 'src/css/search-results-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('search-results.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});