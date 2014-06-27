var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    less        = require('gulp-less'),
    path        = require('path'),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    htmlhint    = require("gulp-htmlhint");


// SOURCES CONFIG 
var source = {
  templates: {
    app: {
        files : ['demo/jade/index.jade'],
        watch: ['demo/jade/*.jade']
    }
  },
  styles: {
    app: {
      main: ['yamm/yamm.less'],
      dir:  'yamm',
      watch: ['yamm/yamm.less']
    }
  }
};

// BUILD TARGET CONFIG 
var build = {
  styles: './yamm',
  templates: {
    app: './'
  }
};


// Error handler
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


//---------------
// TASKS
//---------------



// LESS
gulp.task('yamm', function() {
    return gulp.src(source.styles.app.main)
        .pipe(less({
            paths: [source.styles.app.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(build.styles))
        ;
});



// JADE
gulp.task('templates', function() {
    return gulp.src(source.templates.app.files)
        .pipe(jade({
            pretty: true
        }))
        .on("error", handleError)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest(build.templates.app))
        ;
});



//---------------
// WATCH
//---------------

// Watch changes
gulp.task('watch:demo', function() {
  gulp.watch(source.templates.app.watch,     ['templates']);
});

gulp.task('watch:yamm', function() {
  gulp.watch(source.styles.app.watch,        ['yamm']);
});

//---------------
// DEFAULT TASK
//---------------

gulp.task('default', [
          'yamm',
          'watch:yamm'
        ]);

//---------------
// DEMO TASK
//---------------

gulp.task('demo', [
          'yamm',
          'templates',
          'watch:yamm',
          'watch:demo'
        ]);
