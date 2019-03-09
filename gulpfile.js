var gulp = require("gulp");
var html = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var concat = require("gulp-concat");
//console.log(gulp);

gulp.task("html",function(){
    console.log("optimize html files...");
    gulp.src("dev/*.html").pipe(html({collapseWhitespace:true})).pipe(gulp.dest("prod"));
});

gulp.task("js",function(){
    console.log("optimize js files...");
    gulp.src("dev/*.js").pipe(uglify()).pipe(concat("tudo.min.js")).pipe(gulp.dest("prod"));
});

gulp.task("css",function(){
    console.log("optimize css files...");
    gulp.src("dev/*.css").pipe(uglifycss()).pipe(gulp.dest("prod"));
});

//gulp.task("default",["css","html","js"]);

module.exports.default = gulp.parallel("html","js", "css");
