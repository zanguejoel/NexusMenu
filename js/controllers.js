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
	$scope.process = {};
   $scope.process.roles=[
     {id:"autonumber", name:"userSelection from process.roles"},
     {id:"autonumber", name:"userSelection from process.roles"}
   ];
   $scope.process.transitions = [
    {id:'1', kind: 'manual', source: 'Start', dest: 'OfficeSelection'},
    {id:'3', kind: 'manual', source: 'OfficeSelection', dest: 'TakePicture'} 
    ];
   $scope.process.activities = [
    {id:'1', kind: 'interactive', type:'activity', roles:[
     {id:"autonumber", name:"userSelection from process.roles"},
     {id:"autonumber", name:"userSelection from process.roles"}
    ] },
    {id:'3', kind: 'interactive', type:'activity', roles:[
     {id:"autonumber", name:"userSelection from process.roles"},
     {id:"autonumber", name:"userSelection from process.roles"}
    ] } 
    ];

   $scope.process.shapes = [
    {id:'1', type: 'start', label: 'Start', style:'filled', fillcolor:'lightyellow', fixedsize:'true'},
    {id:'2', type: 'end', label: 'End', style:'filled', fillcolor:'black', fixedsize:'true', fontcolor:'white'},
    {id:'3', type: 'activity', kind:"interactive",   labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'', fixedsize:''},
    {id:'4', type: 'activity', kind:"automatic",    labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'lightgray', fixedsize:''},
    {id:'5', type: 'swtich', kind:"interactive",    labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'', fixedsize:''},
    {id:'6', type: 'swtich', kind:"automatic",     labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'lightgray', fixedsize:''},    
    {id:'7', type: 'split', kind:"interactive",     labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'', fixedsize:''},
    {id:'8', type: 'split', kind:"automatic",      labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'lightgray', fixedsize:''},
    {id:'9', type: 'join', kind:"interactive",     labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'', fixedsize:''},
    {id:'10', type: 'join', kind:"automatic",      labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'lightgray', fixedsize:''},
    {id:'11', type: 'standalone', kind:"interactive",  labelR:'{{selectedRolesComaSeparated}}', label: '{{userInput}}', style:'', fillcolor:'', fixedsize:''}
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

