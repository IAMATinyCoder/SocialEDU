var gulp = require('gulp'),
    bourbon = require('node-bourbon').includePaths,
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;

var paths = {
    scss: './sass/*.scss'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat);
            includePaths: bourbon
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default',function(){
    gulp.start('styles');
});