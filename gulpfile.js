const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const watchsass = require("gulp-watch-sass");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sasslint = require('gulp-sass-lint');

gulp.task('lint', () =>
    gulp.src('src/styles/style.scss')
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
);

gulp.task('sass', () =>
    gulp.src('src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
);

gulp.task("sass:watch", () => {
    gulp.watch([
        "src/styles/**/*"
    ], ["sass"]);
});

// gulp.task('sass:awards', () =>
//   gulp.src('awards/sass/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(csso())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('awards/dist/css'))
// );

gulp.task('watch', () => {
    gulp.watch('sass/**/*', ['sass']);
    //gulp.watch('awards/sass/**/*', ['sass:awards']);
});

gulp.task('default', ['sass']);
//gulp.task('default', ['sass', 'sass:awards']);