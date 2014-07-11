describe('index page', function() {
	beforeEach(function() {
		browser().navigateTo('/')
	});

	it ('redirect works', function() {
		expect(browser().location().url()).toBe('/');
	});
});