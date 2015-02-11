/**
 * Created by Victor on 24/01/2015.
 */
module.exports=function(grunt){
    grunt.initConfig({
        jshint:{
            files: ['lib/**/*js','entities/**/*js','test/**/*js']
        },
        watch :{
            files: ['lib/**/*js','entities/**/*js','test/**/*js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}