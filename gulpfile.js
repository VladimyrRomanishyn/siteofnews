const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-tsc');

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
gulp.task('script', ()=>{
    gulp.src('client/src/**/*.ts')
    .pipe(ts({
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [ "es5", "es2015", "dom" ],
        "noImplicitAny": false,
        "suppressImplicitAnyIndexErrors": true,
        "emitError": false
    }));
});
//-------------------------------------
gulp.task('default',['start','script']);