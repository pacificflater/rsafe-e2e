describe('NAV-06: check settings navigation column work:', function(){

	var common = new commonPageObject();
	let settings = new settingsPageObject();
	let resource = new resourcePageObject();


	beforeAll(function(){
		settings.getSettingsPage();
	});

	it('the title is correct', function(){
		expect(settings.settingsPageName.getText()).toEqual('Настройки системы');
	});

	it('goes to resource settings', function(){
		settings.settingsResourceLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/resource`);
	});

	it('goes to tasks settings', function(){
		settings.settingsTaskLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/task`);
	});

	it('goes to about', function(){
		settings.settingsAboutLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/about`);
	});

	it('goes to user profile settings', function(){
		settings.settingsUserProfileLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/user`);
	});
});