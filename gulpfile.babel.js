const gulp = require('gulp');

gulp.task('build', () => {
    return gulp
        .src('src/*.html')
        .pipe(gulp.dest('dist'));
});