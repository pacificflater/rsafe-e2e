describe('NAV-01: goes to settings page: ', function(){

	let settings = new settingsPageObject();
    let resource = new resourcePageObject();
    let common = new commonPageObject();


    beforeAll(function(){
        resource.getResourcePage();
        browser.driver.manage().window().maximize();
    });

	it('goes to settings page by click', function(){

		settings.settingsPageLink.click();
		expect(settings.settingsPageName.getText()).toEqual('Настройки системы');
	});

});
