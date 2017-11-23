var gulp           = require('gulp'),
	gutil          = require('gulp-util' ),
	sass           = require('gulp-sass'),
	browserSync    = require('browser-sync'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
	autoprefixer   = require('gulp-autoprefixer'),
	notify         = require("gulp-notify"),
	imagemin	   = require('gulp-imagemin');

// Сервер и автообновление страницы Browsersync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

// Минификация пользовательских скриптов проекта и JS библиотек в один файл
gulp.task('js', function() {
	return gulp.src([
//		'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
	.pipe(autoprefixer({grid: true, browsers: ['> 1%','last 2 versions','iOS > 5','ie > 9','Firefox > 20']}))
	.pipe(gulp.dest('app/css'))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('imagemin', function() {
    gulp.src('app/images-dev/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['imagemin', 'sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/images-dev/**/*', ['imagemin']);
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
