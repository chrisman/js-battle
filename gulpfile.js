var gulp = require('gulp')
var concat = require('gulp-concat')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('html', function(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('styles', function(){
  return gulp.src('src/css/*css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function(){
  return browserify('src/js/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('watchman', function(){
  gulp.watch('src/js/*js', ['scripts'])
  gulp.watch('src/css/*css', ['styles'])
  gulp.watch('src/index.html' ['html'])
});

gulp.task('default',['html', 'scripts', 'styles', 'watchman']);
