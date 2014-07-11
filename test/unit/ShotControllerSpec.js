var httpBackend;
var ShotController;
var $scope = {};
var imagesRespondData = [
	{
		"title": "DKNG Icon Solo Show",
		"author": "DKNG",
		"url": "https://d13yacurqjgara.cloudfront.net/users/31348/screenshots/1596906/icon_2_1x.jpg",
		"createdAt": "2014-07-03T10:56:43.501Z",
		"updatedAt": "2014-07-03T10:56:43.501Z",
		"id": 1
	},
	{
		"title": "Mountie - Greetings from Canada",
		"author": "Riley Cran",
		"url": "https://d13yacurqjgara.cloudfront.net/users/5146/screenshots/1625622/mountie_dribbble_1x.jpg",
		"createdAt": "2014-07-03T10:58:30.343Z",
		"updatedAt": "2014-07-03T10:58:30.343Z",
		"id": 2
	},
	{
		"title": "\"Q\"",
		"author": "Charlie Isslander",
		"url": "https://d13yacurqjgara.cloudfront.net/users/13787/screenshots/1626087/q_icon_1x.png",
		"createdAt": "2014-07-03T10:59:28.550Z",
		"updatedAt": "2014-07-03T10:59:28.550Z",
		"id": 3
	},
	{
		"title": "Hangtag Explorations - Rye 51",
		"author": "Jonathan Schubert",
		"url": "https://d13yacurqjgara.cloudfront.net/users/58309/screenshots/1625953/rye51_drib_1x.jpg",
		"createdAt": "2014-07-03T11:00:31.118Z",
		"updatedAt": "2014-07-03T11:00:31.118Z",
		"id": 4
	},
	{
		"title": "Hygge Coffee Co. - Stamps!",
		"author": "Karli Ingersoll",
		"url": "https://d13yacurqjgara.cloudfront.net/users/87960/screenshots/1626078/unknown.jpeg",
		"createdAt": "2014-07-03T11:01:06.340Z",
		"updatedAt": "2014-07-03T11:01:06.340Z",
		"id": 5
	},
	{
		"title": "Sweet!",
		"author": "Ian Dickens",
		"url": "https://d13yacurqjgara.cloudfront.net/users/73679/screenshots/1625767/sweet__1x.jpg",
		"createdAt": "2014-07-03T11:01:34.244Z",
		"updatedAt": "2014-07-03T11:01:34.244Z",
		"id": 6
	},
	{
		"title": "Evil Corp Hungry",
		"author": "The Fox And King",
		"url": "https://d13yacurqjgara.cloudfront.net/users/26059/screenshots/1626664/pt_1_1x.jpg",
		"createdAt": "2014-07-03T11:02:09.194Z",
		"updatedAt": "2014-07-03T11:02:09.194Z",
		"id": 7
	},
	{
		"title": "Ahhh HAH!",
		"author": "The Fox And King",
		"url": "https://d13yacurqjgara.cloudfront.net/users/26059/screenshots/1581975/ahhah_1x.jpg",
		"createdAt": "2014-07-03T11:02:32.787Z",
		"updatedAt": "2014-07-03T11:02:32.787Z",
		"id": 8
	},
	{
		"title": "Deer",
		"author": "Matt Anderson",
		"url": "https://d13yacurqjgara.cloudfront.net/users/121405/screenshots/1626363/deer-01_1x.png",
		"createdAt": "2014-07-03T11:03:14.875Z",
		"updatedAt": "2014-07-03T11:03:14.875Z",
		"id": 9
	},
	{
		"title": "Something Incredible",
		"author": "Shauna Lynn Panczyszyn",
		"url": "https://d13yacurqjgara.cloudfront.net/users/46879/screenshots/1625786/screen_shot_2014-07-02_at_12.29.34_pm.png",
		"createdAt": "2014-07-03T11:03:56.483Z",
		"updatedAt": "2014-07-03T11:03:56.483Z",
		"id": 10
	},
	{
		"title": "There is beauty in everything",
		"author": "Sam Lee",
		"url": "https://d13yacurqjgara.cloudfront.net/users/170458/screenshots/1626531/dribbble_1x.jpg",
		"createdAt": "2014-07-03T11:05:02.510Z",
		"updatedAt": "2014-07-03T11:05:02.510Z",
		"id": 11
	},
	{
		"title": " Deep Sea Blues",
		"author": "katie campbell",
		"url": "https://d13yacurqjgara.cloudfront.net/users/96533/screenshots/1625895/deep_sea_blues.jpg",
		"createdAt": "2014-07-03T11:05:24.794Z",
		"updatedAt": "2014-07-03T11:05:24.794Z",
		"id": 12
	},
	{
		"title": "Anders (Free Font)",
		"author": "TomAnders",
		"url": "https://d13yacurqjgara.cloudfront.net/users/350140/screenshots/1625793/dribbble_1x.jpg",
		"createdAt": "2014-07-03T11:06:04.283Z",
		"updatedAt": "2014-07-03T11:06:04.283Z",
		"id": 13
	},
	{
		"title": "Mountains",
		"author": "Chrystelle Blot",
		"url": "https://d13yacurqjgara.cloudfront.net/users/544060/screenshots/1626301/moutains-dribbble_1x.png",
		"createdAt": "2014-07-03T11:06:29.881Z",
		"updatedAt": "2014-07-03T11:06:29.881Z",
		"id": 14
	},
	{
		"title": "Mystery Project 55 (De-Rezzed)",
		"author": "Gabe Telepak",
		"url": "https://d13yacurqjgara.cloudfront.net/users/21927/screenshots/1626359/tree_1x.png",
		"createdAt": "2014-07-03T11:07:11.762Z",
		"updatedAt": "2014-07-03T11:07:11.762Z",
		"id": 15
	},
	{
		"title": "Texture Study",
		"author": "Lynette Liwanag",
		"url": "https://d13yacurqjgara.cloudfront.net/users/3623/screenshots/1626848/texture-study.png",
		"createdAt": "2014-07-03T11:08:32.624Z",
		"updatedAt": "2014-07-03T11:08:32.624Z",
		"id": 16
	}
];

beforeEach( function() {
	module( 'app' );

	inject( function( $controller, $httpBackend ) {
		httpBackend = $httpBackend;

		httpBackend.whenGET( '/shot?limit=16&page=1' ).respond( imagesRespondData );
		httpBackend.whenGET( '/shot/count' ).respond( 70 );

		ShotController = $controller( 'ShotController', {
			$scope: $scope
		} );
	} );
} );

describe( 'ShotController', function() {
	it( 'should have 16 images on page', function() {
		httpBackend.expectGET( '/shot?limit=16&page=1' );
		httpBackend.expectGET( '/shot/count' );

		httpBackend.flush();

		expect( $scope.images.length ).toBe( 16 );
	} );
} );