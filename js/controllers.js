var controllers = {};

controllers.MenuController = function($scope){
			$scope.obj = [
				{name: 'Downloads', aIcon: 'gn-icon gn-icon-download', url: '#/downloads', subMenu:[{name:'Vector Illustrations', aIcon:'gn-icon gn-icon-illustrator', url:'#'},{name:'Photoshop files', aIcon:'gn-icon gn-icon-photoshop', url:'#'}]},
				{name: 'Settings', liIcon: '', aIcon: 'gn-icon gn-icon-cog', url: '#/settings', subMenu:[]},
				{name: 'Help', aIcon: 'gn-icon gn-icon-help', url: '#/help', subMenu:[]},
				{name: 'Archives', aIcon: 'gn-icon gn-icon-archive', url: '#/archives',subMenu:[{name:'Articles', aIcon:'gn-icon gn-icon-article', url:'#'}, {name:'Images', aIcon:'gn-icon gn-icon-pictures', url:'#'}, {name:'Videos', aIcon:'gn-icon gn-icon-videos', url:'#'}]},	
			];
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


nexusModule.directive('passObject', function() {
    return {
        restrict: 'E',
        scope: { obj: '=' },
        controller:'MenuController',
        template: '<ul id="gn-menu" class="gn-menu-main">\
        <li class="gn-trigger"><a class="gn-icon gn-icon-menu"><span>Menu</span></a><nav class="gn-menu-wrapper">\
        <div class="gn-scroller">\
              <ul class="gn-menu"  >\
                <li class="gn-search-item">\
                  <input placeholder="Search" type="search" class="gn-search">\
                  <a class="gn-icon gn-icon-search"><span>Search</span></a>\
                </li>\
                  <li ng-repeat="element in obj">\
                    <a class="{{element.aIcon}}" href="{{element.url}}">{{element.name}}</a>\
                    <ul class="gn-submenu">\
                      <li ng-repeat="sub in element.subMenu">\
                        <a class="{{sub.aIcon}}" href="{{sub.url}}">{{sub.name}}</a>\
                      </li>\
                    </ul>\
                  </li>\
              </ul>\
            </div><!-- /gn-scroller -->\
          </nav>\
        </li>\
        <li><a href="http://tympanus.net/codrops">Codrops</a></li>\
        <li><a class="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/HeaderEffects/"><span>Previous Demo</span></a></li>\
        <li><a class="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=16030"><span>Back to the Codrops Article</span></a></li>\
</ul>'
    };
});