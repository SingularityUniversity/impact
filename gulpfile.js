var gulp = require('gulp');
var s3 = require("gulp-s3-deploy");
var exec = require('child_process').exec;
var replace = require('gulp-replace');

var s3Credentials = {
  "key":    "AKIAIAK35SU4VGCVUTRQ",
  "secret": "JA9//T/DsQyh7fawo3tSx1xFgFG+vkUHo6Qt897g",
  "bucket": "initiatives",
  "region": "us-east-1"
};


gulp.task('amend', function() {
  gulp.src(['src/index.html'])
    .pipe(replace('<base href="/">', '<base href="/initiatives/">'))
    .pipe(gulp.dest('src/'))
})

gulp.task('build', ['amend'], function (cb) {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
})


gulp.task('deploy', ['build'], function () {
  gulp.src("./dist/**")
    .pipe(s3(s3Credentials))
});


gulp.task('revert', ['deploy'], function () {
  gulp.src(['src/index.html'])
      .pipe(replace('<base href="/initiatives/">', '<base href="/">'))
      .pipe(gulp.dest('src/'))
  })

gulp.task('default', ['revert']);
