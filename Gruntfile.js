module.exports = function(grunt) {

    grunt.initConfig({
        'loopback_auto':{
            'pg': {
                options: {
                    dataSource: 'pg',
                    app: './server/server',
                    config: './server/model-config',
                    method: 'autoupdate'
                }
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-loopback-auto');
  
    grunt.registerTask('autoupdate', ['loopback_auto:pg']);
    grunt.registerTask('default', ['autoupdate']);
  
  };