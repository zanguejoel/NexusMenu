var controllers = {};

controllers.MenuController = function($scope){
			$scope.obj = [
				{name: 'Downloads', aIcon: 'gn-icon gn-icon-download', url: '#/downloads', subMenu:[{name:'Vector Illustrations', aIcon:'gn-icon gn-icon-illustrator', url:'#'},{name:'Photoshop files', aIcon:'gn-icon gn-icon-photoshop', url:'#'}]},
				{name: 'Settings', liIcon: '', aIcon: 'gn-icon gn-icon-cog', url: '#/settings', subMenu:[]},
				{name: 'Help', aIcon: 'gn-icon gn-icon-help', url: '#/help', subMenu:[]},
				{name: 'Archives', aIcon: 'gn-icon gn-icon-archive', url: '#/archives',subMenu:[{name:'Articles', aIcon:'gn-icon gn-icon-article', url:'#'}, {name:'Images', aIcon:'gn-icon gn-icon-pictures', url:'#'}, {name:'Videos', aIcon:'gn-icon gn-icon-videos', url:'#'}]},	
			];
		};

controllers.processController = function($scope){

	 $scope.obj = [{id: '1', kind: 'manual', source: 'Start', dest: 'OfficeSelection'},
	 			   {id: '3', kind: 'manual', source: 'OfficeSelection', dest: 'TakePicture'}];
  };

controllers.MainController = function($scope){
		$scope.title = 'Main';
};

controllers.DownloadsController = function($scope){
		$scope.title = 'Downloads';
};

controllers.SettingsController = function($scope){
	    $scope.title = 'Settings';
};

controllers.HelpController = function($scope){
		$scope.title = 'Help';
};

controllers.ArchivesController = function($scope){
		$scope.title = 'Archives';
};


nexusModule.controller(controllers);

