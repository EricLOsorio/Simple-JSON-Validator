var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
  //  bundle = browserify('./*.js').bundle(),
    pump = require('pump'),
    cssmin = require('gulp-cssmin');


gulp.task('build', function() {

  return browserify({entries: ['./jason_validator.js','./worker.js'], extensions: ['.js'],debug: true})
         .transform("babelify", {presets: ["es2015"] })
	 .bundle()
	 .pipe(source('bundle.js'))
	 .pipe(buffer())
	 .pipe(uglify())
	 .pipe(gulp.dest('dest'));

}),


gulp.task('minifyCSS', function () {

  gulp.src('./*.css')
      .pipe(cssmin() )
      .pipe(gulp.dest('./dest'));
});

gulp.task('jslint', function () {

  return gulp.src("./*.js")
             .pipe(eslint() )
	     .pipe(eslint.format() )
	     .pipe(eslint.failAfterError() );

});

