
nexusModule.directive('graphviz', 
    function() {
      return {
        restrict: 'EAC',
        require: '?ngModel',
        controller: 'processController',
        link: function($scope, element, attrs, controller) {
          var controllerOptions, options;

          var vizGraph = "digraph G{ ";
          
          /*angular.forEach(obj, function(process, index) {
			 vizGraph + = process.source + "->" process.dest;
			  alert("OK");
		   });*/

		   
			angular.forEach($scope.obj, function(value, key) { 
			if(key==0) 
			  vizGraph  +=  value.source + " -> " + value.dest ;
			else{
			  vizGraph  +=   " -> " + value.dest ;
			}
			  
			  console.log(value.dest);  
			   
			});  


          vizGraph += ";}";
          console.log(vizGraph); 

         element.html(Viz(vizGraph));
        }
      };
    }
  );

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

