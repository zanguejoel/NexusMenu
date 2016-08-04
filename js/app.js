var nexusModule = angular.module('nexusModule', [ 'ngRoute' ]);
			nexusModule.config(function($routeProvider){
				$routeProvider
				.when('/',{
					templateUrl: 'templates/main.html',
					controller: 'MainController'
				})
				.when('/downloads',{
					templateUrl: 'templates/download.html',
					controller: 'DownloadsController'
				})
				.when('/settings',{
					templateUrl: 'templates/settings.html',
					controller: 'SettingsController'
				})
				.when('/help',{
					templateUrl: 'templates/help.html',
					controller: 'HelpController'
				})
				.when('/archives',{
					templateUrl: 'templates/archives.html',
					controller: 'ArchivesController'
				})
				.otherwise({
              redirectTo: '/'
           		});
			});

			