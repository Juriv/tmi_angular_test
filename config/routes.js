var shotAppRoute = {
	view: 'shot-app'
};

module.exports.routes = {
	'/': shotAppRoute,
	'/page-:page': shotAppRoute,

	'/templates/*': 'TemplateController.findOne'
};