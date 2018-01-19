var gulp = require('gulp');
var s3 = require("gulp-s3-deploy");
var exec = require('child_process').exec;
var replace = require('gulp-replace');

var s3Credentials = {
  "key":    "AKIAIAK35SU4VGCVUTRQ",
  "secret": "JA9//T/DsQyh7fawo3tSx1xFgFG+vkUHo6Qt897g",
  "bucket": "initiatives.su.org",
  "region": "us-east-1"
};


gulp.task('build', function (cb) {
  exec('ng build', function (err, stdout, stderr) {
    console.info(stdout);
    console.info(stderr);
    cb(err);
  })
})


gulp.task('deploy', ['build'], function () {
  gulp.src("./dist/**")
    .pipe(s3(s3Credentials))
});


gulp.task('default', ['deploy']);
