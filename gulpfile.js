const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');

//-------------------------------------

gulp.task('start', ()=> {
  nodemon({
    script: 'index.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});
//-------------------------------------
//gulp.watch('client/src/**/*.ts',['script']);
//-------------------------------------
//gulp.task('script', ()=>{
//    const tsProject = ts.createProject('tsconfig.json');
//    gulp.src('client/src/**/*.ts')
//        .pipe(tsProject());
//});
//-------------------------------------
gulp.task('default',['start']);