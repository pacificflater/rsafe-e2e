describe('NAV-02: goes to support page: ', function(){

	var common = new commonPageObject();
	var support = new supportPageObject();
	var resource = new resourcePageObject();

	beforeAll(function(){
		browser.driver.manage().window().maximize();
        resource.getResourcePage();
    });

	it('goes to support page by click', function(){
		support.supportPageLink.click();
		common.waitForElement(support.supportPageName);
		expect(support.supportPageName.getText()).toEqual('Техническая поддержка');
	});

});
