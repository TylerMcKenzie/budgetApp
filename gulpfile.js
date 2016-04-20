var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function(){
	gulp.src('public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/minjs'));
});

gulp.task('default', function(){
	console.log("Gulp is running correctly");
});