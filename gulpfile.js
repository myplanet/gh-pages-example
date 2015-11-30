var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('deploy-html', function () {
    gulp.src('gh-pages/index.html')
        .pipe(plugins.htmlReplace())
        .pipe(gulp.dest('.deploy'));
});

gulp.task('deploy', [ 'deploy-html' ]);

gulp.task('default', [ 'deploy' ]);
