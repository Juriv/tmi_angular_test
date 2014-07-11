'use strict';

angular
    .module( 'app', [ 'ngRoute', 'pascalprecht.translate' ] )
    .config( function( $routeProvider, $locationProvider ) {
		var pagination = {
			templateUrl: '/templates/shots',
			controller: 'ShotController'
		};
		$routeProvider
			.when( '/', pagination )
			.when( '/page-:page', pagination )
			.otherwise( {
				redirectTo: '/'
			} );

		$locationProvider.html5Mode( true );
	} )
    .config( function( $translateProvider ) {
        $translateProvider
            .translations( 'en_US', {
                'imageInfo:by': 'by',
                'imageInfo:Download': 'Download',

                'pagination:First': 'First',
                'pagination:Prev': 'Prev',
                'pagination:Next': 'Next',
                'pagination:Last': 'Last'
            } )
            .translations( 'ru_RU', {
                'imageInfo:by': 'от',
                'imageInfo:Download': 'Скачать',

                'pagination:First': 'Перв',
                'pagination:Prev': 'Пред',
                'pagination:Next': 'След',
                'pagination:Last': 'Посл'
            } )
            .preferredLanguage( localStorage.lang = localStorage.lang || 'en_US' );
    } )
    .directive( 'shot', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/shot',
            replace: true
        };
    } )
    .directive( 'img', function() {
        return {
            restrict: 'E',
            link: function( $scope, element, attrs ) {
                element.addClass( 'hide' );
                element.bind( 'load', function() {
                    element.removeClass( 'hide' );
                } );
            }
        }
    } )
    .controller( 'ShotController', function( $scope, $http, $routeParams, $translate ) {
        var limit = 16;
        var page = parseInt( $routeParams.page ) || 1;

        $scope.changeLang = function( langKey ) {
            localStorage.lang = langKey;
            $translate.use( langKey );
        };

		$http.get( '/shot?limit=' + limit + '&page=' + page )
			.success( function( images ) {
				$scope.images = images;
			} );

		$http.get( '/shot/count' )
			.success( function( count ) {
				var maxPageOnView = 5;
				var index = 1;
				var length = Math.ceil( count / limit );
				var lastPage = length;
				var pageNavigationButtons = [];

				if( length > maxPageOnView ) {
					length = Math.min( page + parseInt( maxPageOnView / 2 ), length );
					index = Math.max( length - maxPageOnView + 1, index );

					if( length - index + 1 < maxPageOnView ) {
						length = maxPageOnView
					}
				}

				while( index <= length ) {
					pageNavigationButtons.push( index );

					index++;
				}

				$scope.currentPage = page;
				$scope.prevPage = ( page - 1 ) < 1 ? page : page - 1;
				$scope.nextPage = ( page + 1 ) > lastPage ? page : page + 1;
				$scope.lastPage = lastPage;
				$scope.pageNavigationButtons = pageNavigationButtons;
			} );
    } );