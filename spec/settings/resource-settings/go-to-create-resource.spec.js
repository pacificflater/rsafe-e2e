describe('resCreate-1: go to create resource: ', function(){

	let settings = new settingsPageObject();
	let resource = new resourcePageObject();
	let common = new commonPageObject();

	beforeEach(function(){
		resource.getResourcePage();
	});
	//browser.get('http://127.0.0.1:8001/#/resource/view');

	it('go to create new ntfs resource from resource page', function(){
		resource.ntfsLink.click();
		common.waitForElement(resource.seeMoreLink);
		resource.seeMoreLink.click();
		common.waitForElement(resource.dropDownMenu);
		resource.newResourcePageLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/resource/ntfs`);
	});

	it('goes to create new ntfs resource from settings page', function(){
		browser.get(`http://${common.serverUrl}/#/settings/resource`);
		settings.addNTFS.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/resource/ntfs`);
	});

	
	it('goes to create new AD resource from start page', function(){
		common.waitForElement(resource.adLink);
		resource.adLink.click();
		common.waitForElement(resource.seeMoreLink);
		resource.seeMoreLink.click();
		common.waitForElement(resource.dropDownMenu);
		resource.newResourcePageLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/resource/ad`);

	});

	it('goes to create new ad resource from settings page', function(){
		browser.get(`http://${common.serverUrl}/#/settings/resource`);
		settings.addAd.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/settings/resource/ad`);
	});
		
});