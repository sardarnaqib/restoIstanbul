const gulp = require("gulp");
const sass = require("gulp-sass");

function css() {
  return gulp
    .src("./src/Assets/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./src/Assets/build/css/"));
}

function watch() {
  gulp.watch("./src/Assets/scss/*.scss", css);
}

var build = gulp.parallel(watch);
gulp.task("default", build);
gulp.task("css", css);
