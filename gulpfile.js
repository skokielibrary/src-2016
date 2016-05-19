var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./dist"
  });

  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(minifyCss())
    .pipe(gulp.dest("dist/custom/assets/css"))
});

gulp.task('default', ['serve']);
