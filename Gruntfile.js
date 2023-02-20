module.exports = function(grunt){

	grunt.initConfig({
		bookmarklet_wrapper: {
		  your_target: {
			// Target-specific file lists and/or options go here.
			files: {
			  'all-bookmarklet.js': ['all.js', 'all2.js']
			}
		  },
		},
	  });
  
	//プラグインからタスクを読み込む（uglifyは1例）
	grunt.loadNpmTasks('grunt-bookmarklet-wrapper');
  
	//タスクの登録
	grunt.registerTask('default', ['bookmarklet_wrapper']);
  
  }