const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}

exports.df = defaultTask;

//檔案搬家
function move() {
    return src('index.html').pipe(dest('dist/'))
}

exports.mv = move;

//任務的順序
function TaskA(cb) {
    console.log("task A")
    cb();
}

function TaskB(cb) {
    console.log("task B")
    cb();
}

function TaskC(cb) {
    console.log("task C")
    cb();
}

function TaskD(cb) {
    console.log("task D")
    cb();
}

function TaskE(cb) {
    console.log("task E")
    cb();
}

exports.async = series(TaskA, TaskB); //有先後順序執行
exports.sync = parallel(TaskA, TaskB); //同時執行


exports.all = series(TaskA, TaskB, parallel(TaskC, TaskD), TaskE)

// CSS壓縮
const cleanCSS = require('gulp-clean-css');

function minicss() {
    return src('src/css/*.css')
        .pipe(cleanCSS()) //壓縮css
        .pipe(dest('dist/css')) //放到 dist 的 css 資料夾
}


exports.style = minicss;



// js 壓縮

const uglify = require('gulp-uglify');

function minijs() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'))
}

exports.scripts = minijs;

