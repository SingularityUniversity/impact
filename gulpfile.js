var gulp = require('gulp');
var s3 = require("gulp-s3-deploy");

var s3Credentials = {
  "key":    "AKIAIAK35SU4VGCVUTRQ",
  "secret": "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",
  "bucket": "initiatives",
  "region": "us-east-1"
};

gulp.task('default', function() {
  console.log('gulp')
});

gulp.task('deploy', function () {
  gulp.src("./dist/**")
    .pipe(s3(s3Credentials))
});
