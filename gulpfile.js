var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
function serve() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    buildSass();
    gulp.watch('scss/**/*.scss', buildSass);
    gulp.watch('*.html').on('change', browserSync.reload);
}

// Compile sass into CSS & auto-inject into browsers
function buildSass() {
    return gulp
        .src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

// exports.build = build;
exports.default = serve;
