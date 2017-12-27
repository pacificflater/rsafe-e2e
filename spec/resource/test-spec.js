xdescribe('test', function(){
	browser.get('http://rsafe-e2e.demo.oim/#/resource/view/');
	it('test', function(){
		expect(element(by.css('title')).getText()).toEqual('Welcome to application for Fix');
	});
});