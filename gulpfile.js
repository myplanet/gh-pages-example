var fs = require('fs'),
    yaml = require('js-yaml'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('deploy-html', function () {
    var page = yaml.safeLoad(fs.readFileSync('gh-pages/page.yml', 'utf8'));

    var replacements = {
        title: page.title
    };

    if (page.subtitle) {
        replacements.subtitle = {
            src: page.subtitle,
            tpl: '<h2>%s</h2>'
        };
    }

    gulp.src('gh-pages/index.html')
        .pipe(plugins.htmlReplace(replacements))
        .pipe(gulp.dest('.deploy'));
});

gulp.task('deploy', [ 'deploy-html' ]);

gulp.task('default', [ 'deploy' ]);
