Angular.js Implementation of Google Nexus Menu

Contains bootstrap as dependency

For parcing menu elements, use json format into MenuController

example

$scope.menuElements = [
				{name: 'Downloads', aIcon: 'gn-icon gn-icon-download', url: '#/downloads', subMenu:[{name:'Vector Illustrations', aIcon:'gn-icon gn-icon-illustrator', url:'#'},{name:'Photoshop files', aIcon:'gn-icon gn-icon-photoshop', url:'#'}]},
				{name: 'Settings', liIcon: '', aIcon: 'gn-icon gn-icon-cog', url: '#/settings', subMenu:[]},
				{name: 'Help', aIcon: 'gn-icon gn-icon-help', url: '#/help', subMenu:[]},
				{name: 'Archives', aIcon: 'gn-icon gn-icon-archive', url: '#/archives',subMenu:[{name:'Articles', aIcon:'gn-icon gn-icon-article', url:'#'}, {name:'Images', aIcon:'gn-icon gn-icon-pictures', url:'#'}, {name:'Videos', aIcon:'gn-icon gn-icon-videos', url:'#'}]},	
			];
		};

All partials are stored in templates/

You can invoke botstrap js implicitly in index.html as

<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />

You can invoke botstrap js implicitly in index.html as

<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
